import { Component, OnInit ,Input,HostBinding,ViewEncapsulation} from '@angular/core';

//按钮类型
export type ButtonType = 'default' | 'primary' | 'dashed'|'text' | 'info'|'success'|'warning'|'error';


@Component({
  selector: '[nv-button]',
  templateUrl: './button.component.html',
  host:{
    'class': 'nv-button',
    '[class.nv-button-default]':'type=="default"',    
    '[class.nv-button-primary]': 'type==="primary"',
    '[class.nv-button-dashed]': 'type==="dashed"',
    '[class.nv-button-text]': 'type==="text"',
    '[class.nv-button-info]': 'type==="info"', 
    '[class.nv-button-success]': 'type==="success"',    
    '[class.nv-button-warning]': 'type==="warning"',    
    '[class.nv-button-error]': 'type==="error"'
  },
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button.component.less']
})

export class ButtonComponent implements OnInit {
  _type: ButtonType;
  constructor() { }

  ngOnInit() {
  }

@Input('nvType') type: ButtonType = 'primary';



}
