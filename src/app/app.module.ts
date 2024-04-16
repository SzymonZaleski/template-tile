import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SkyAlertModule, } from '@skyux/indicators';
import { SkyToolbarModule, SkyFluidGridModule, SkyBoxModule } from '@skyux/layout';
import { SkyFilterModule, SkyRepeaterModule, SkyPagingModule } from '@skyux/lists';
import { SkyIdModule } from '@skyux/core';
import { SkyPageModule } from '@skyux/pages';
import { SkyThemeService } from '@skyux/theme';

import { AppComponent } from './app.component';

import { MyTileComponent } from './my-tile/my-tile.component';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

@NgModule({
  declarations: [
    AppComponent,
    MyTileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SkyAlertModule,
    SkyPageModule,
    SkyToolbarModule,
    SkyFluidGridModule,
    SkyBoxModule,
    SkyFilterModule,
    SkyRepeaterModule,
    SkyPagingModule,
    SkyIdModule,
  ],
  providers: [
    AddinClientService,
    SkyThemeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
