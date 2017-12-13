import { Component, OnInit ,Input,HostBinding,ViewEncapsulation} from '@angular/core';

//按钮类型
export type ButtonType = 'default' | 'primary' | 'dashed'|'text' | 'info'|'success'|'warning'|'error';
export type ButtonShape='circle'

@Component({
  selector: '[nv-button]',
  templateUrl: './button.component.html',
  host:{
    'class': 'nv-button',
    '[class.nv-button-default]':'!shape_type && type=="default"',    
    '[class.nv-button-primary]': '!shape_type && type==="primary"',
    '[class.nv-button-dashed]': '!shape_type && type==="dashed"',
    '[class.nv-button-text]': '!shape_type && type==="text"',
    '[class.nv-button-info]': '!shape_type && type==="info"', 
    '[class.nv-button-success]': '!shape_type && type==="success"',    
    '[class.nv-button-warning]': '!shape_type && type==="warning"',    
    '[class.nv-button-error]': '!shape_type && type==="error"',
    // '[class.nv-button-circle]': 'shape_type ==="circle"',
    
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
// @Input('nvShape') shape_type: ButtonShape = 'circle';



@Input('nvShape') 
@HostBinding('class.nv-button-circle')
get shape(){return this._shape}
set shape(value){this._shape = this.toBoolean(value);console.log(value);console.log(this._shape)}
private _shape: boolean = false;

 toBoolean(value: any): boolean {
  return value != null && `${value}` !== 'false';
}




}
