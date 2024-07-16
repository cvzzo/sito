import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { CardComponent } from "../card/card.component";

interface Vault {
  id:number;
  title: string;
  name: string;
  password: string;
}

@Component({
  selector: 'vault',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent, CardComponent],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.css',
})
export class VaultComponent {
  popupShow: boolean = false;
  showPassword: boolean = false;
  id:number = 0;
  vault: Vault[] = [];
  
  title: string = '';
  name: string = '';
  password: string = '';

  toggleWindow() {
    this.popupShow = !this.popupShow;
    console.log(this.popupShow);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  addToVault(){
      const newVaultItem: Vault = {
        id: this.id++,
        title: this.title,
        name: this.name,
        password: this.password,
    };
      this.vault.push(newVaultItem);
    
      this.title = '';
      this.name = '';
      this.password= '';
      console.log(this.vault)
      this.popupShow = !this.popupShow;
    }

    goBack(){
      this.title = '';
      this.name = '';
      this.password= '';
      this.popupShow = !this.popupShow;
    }
  
}
