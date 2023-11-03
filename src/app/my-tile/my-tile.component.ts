import { Component, OnInit } from '@angular/core';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss'],
})
export class MyTileComponent implements OnInit {
  ws_url: string = 'https://phil-web01-prd.fhcrc.org/pas_ws/sqldata/';
  public environmentId: any;
  public recordId: string | undefined;
  public userIdentityToken: string | undefined;
  public data: any;
  public dataError: string | undefined;

  constructor(
    private addinClientService: AddinClientService,
    private httpClient: HttpClient
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.recordId = args.context.recordId;
      this.environmentId = args.envId;
      this.addinClientService.getUserIdentityToken().subscribe((token: string) => {
        this.userIdentityToken = token;
        this.httpClient.get(
          `${this.ws_url}example?id=${this.recordId}&uit=${this.userIdentityToken}`
        ).subscribe({
          next: (response: any) => {
            if (response.length > 0){
              this.data = response[0];
              args.ready({
                showUI: true,
                title: 'Template Tile'
              });
            }
          },
          error: (e: any) => {
            this.dataError = JSON.stringify(e);
          }
        });
      });
    });
  }
}
