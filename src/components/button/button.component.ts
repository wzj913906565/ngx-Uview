import { Component, OnInit, Input, HostBinding, ViewEncapsulation, HostListener,Renderer2,ElementRef } from '@angular/core';

//按钮类型
export type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'info' | 'success' | 'warning' | 'error';
export type ButtonShape = 'circle'
export type ButtonSize = 'large' | 'default' | 'small' | 'long'


@Component({
  selector: '[nv-button]',
  templateUrl: './button.component.html',
  host: {
    'class': 'nv-button',
    '[class.nv-button-default]': '!shape_type && type=="default"',
    '[class.nv-button-primary]': '!shape_type && type==="primary"',
    '[class.nv-button-dashed]': '!shape_type && type==="dashed"',
    '[class.nv-button-text]': '!shape_type && type==="text"',
    '[class.nv-button-info]': '!shape_type && type==="info"',
    '[class.nv-button-success]': '!shape_type && type==="success"',
    '[class.nv-button-warning]': '!shape_type && type==="warning"',
    '[class.nv-button-error]': '!shape_type && type==="error"',
    '[class.nv-button-large]': '!shape_type && size_type==="large"',
    '[class.nv-button-small]': '!shape_type && size_type==="small"',
    '[class.nv-button-long]': '!shape_type && size_type==="long"',

  },
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button.component.less']
})

export class ButtonComponent implements OnInit {
  _type: ButtonType;
  _el: HTMLElement;  
  _buttonCLick='nvClick'
  nativeElement: HTMLElement;
  
  constructor(private _elementRef: ElementRef,private _renderer: Renderer2) { 
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
  }

  ngOnInit() {
  }
  // 按钮类型
  @Input('nvType') type: ButtonType = 'primary';


  // 按钮形状circle
  @Input('nvShape')
  @HostBinding('class.nv-button-circle')
  get shape() { return this._shape }
  set shape(value) { this._shape = this.toBoolean(value); }
  private _shape: boolean = false;

  //搜索按钮类型
  @Input('nvIcon')
  @HostBinding('class.nv-button-icon-search')
  get icon() { return this._icon }
  set icon(value) { this._icon = this.toBoolean(value) }
  private _icon: boolean = false;
  // 按钮大小
  @Input('nvSize') size_type: ButtonSize = "default"

  // 点击动画
  @HostListener('click')
  _onclick() {
    console.log('点击');
    this._clicked=true;
    this._renderer.addClass(this._el,this._buttonCLick);
    setTimeout(()=>{
    this._renderer.removeClass(this._el,this._buttonCLick);    
    },1500)
  }
  private _clicked:boolean=false;

  // 公用方法,数值boolean转换
  toBoolean(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }




}
