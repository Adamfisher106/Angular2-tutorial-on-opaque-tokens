import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import THIRD_PARTY-LIB-PROVIDERS from './third-party-lib';
@Component({
  selector: 'my-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


  providers: [
    { provide: DataService, useClass: DataService},
    { provide: featureEnabledToken, useValue: Feature_Enabled },
    { provide: configToken, useValue: CONFIG }
  ]

})
class MyComponent {
  constructor(
    private dataService: DataService,
    @Inject(featureEnabledToken) private featureEnabled,
    @Inject(configToken) private config
    ) {}

}

export class AppComponent {
  title = 'app';
}

const CONFIG = {
  apiUrl: 'http://my/.api.com',
  theme: 'suicide-squad',
  title: 'My awesome app'
};

const FEATURE_ENABLED = true;


let featureEnabledToken = 'featureEnabled';
let configToken = 'config';

export const THIRD_PARTY_LIB_PROVIDERS = [
  { provide: 'config', useClass: ThirdParyConfig }
];