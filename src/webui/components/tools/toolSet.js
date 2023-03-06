/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-13 10:56:18
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-03-06 09:40:37
 * @FilePath: \RjhUitraEdit\src\webui\components\tools\toolSet.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class toolSet {
  constructor(options) {
    this.opts = Object.assign(
      {
        location: '', //dom位置
        name: '', //标题
        optionsList: [], //下拉框选项
        type: '', //类型
        checkboxList: [], //多个单选框
        class: '',
        buttonId: '', //按钮id
        publicSettingList: [],
        tooltip: '' //提示信息
      },
      options
    )
    this.init()
  }
  init() {
    var timer = setTimeout(() => {
      this.renderView()
      this.event()
      clearTimeout(timer)
    }, 1)
  }
  renderView() {
    //输入框
    if (this.opts.type == 'input') {
      $('#' + this.opts.location).append(`
        <div class="x-y-flex s-c-b-options">
        
          <div>${this.opts.name}</div>
          
          <div class="retracementInput x-y-flex">
            <input type="number" max="100" class="s-c-b-input" />
            <div class="s-c-b-border"></div>
            <button class="s-c-b-button">
              <svg class="icon-withdraw" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
              </svg>
            </button>
          </div>

        </div>
        `)
    }
    //单选框
    else if (this.opts.type == 'checkbox') {
      $('#' + this.opts.location).append(`
            <div class="x-y-flex s-c-b-options">
              <div class="${this.opts.class}">${this.opts.name}</div>
              <input type="checkbox" />
            </div>
        `)
    }

    //图片
    else if (this.opts.type == 'img') {
      $('#' + this.opts.location).append(
        `
          <div class="x-y-flex s-c-b-options">
                        
              <div class="x-y-flex s-c-b-o-box">
                <img src="../../../../static/assets/images/caizhi.png"/>
  
                <div class="s-c-b-i-box">
                  <div>${this.opts.name}</div>
  
                  <div class="flex">
  
                    <button class="s-c-b-button">
                      <svg class="icon-replace" aria-hidden="true">
                        <use xlink:href="#icon-tihuan-1"></use>
                      </svg>
                    </button>
  
                    <button style="margin-left:8px" class="s-c-b-button">
                      <svg class="icon-replace" aria-hidden="true">
                        <use xlink:href="#icon-jiajuzuhe-xiankuang"></use>
                      </svg>
                    </button>
  
                  </div>
  
                </div>
                
              </div>
          
              <div class="x-y-flex">
                <div class="s-c-b-i-border"></div>
                <button class="s-c-b-button">
                  <svg class="icon-withdraw" aria-hidden="true">
                    <use xlink:href="#icon-fanhui"></use>
                  </svg>
                </button>
              </div>
          
          </div>
          `
      )
    }
    // 下拉框
    else if (this.opts.type == 'select') {
      $('#' + this.opts.location).append(`
          <div class="x-y-flex s-c-b-options">
              <div class="${this.opts.class}">${this.opts.name}</div>

              <select class="s-c-b-select" name="" id="">
                ${this.opts.optionsList
                  .map((e) => {
                    return `
                    <option>${e.val}</option>
                  `
                  })
                  .join('')}
              </select>
          </div>
        `)
    }

    // 坐标框
    else if (this.opts.type == 'coord') {
      $('#' + this.opts.location).append(`
          <div class="s-c-b-options">
              <div style="margin-bottom:8px">${this.opts.name}</div>

              <div class="x-y-flex">

                <div class="coordInputBox x-y-flex">
                  <div class="c-i-title">X</div>
                  <input class="coordInput" type="number"/>
                </div>

                <div class="coordInputBox x-y-flex">
                  <div class="c-i-title">Y</div>
                  <input class="coordInput" type="number"/>
                </div>

                <div class="coordInputBox x-y-flex">
                  <div class="c-i-title">Z</div>
                  <input class="coordInput" type="number"/>
                </div>

              </div>
          </div>
        `)
    }
    // 图标按钮
    else if (this.opts.type == 'button') {
      $('#' + this.opts.location).append(`
              <button class="e-s-btn" name="${this.opts.tooltip}" title="${this.opts.name}">
                <svg class="${this.opts.class}" aria-hidden="true">
                  <use xlink:href="${this.opts.icon}"></use>
                </svg>
              </button>
          `)
    }
    // 按钮带撤回
    else if (this.opts.type == 'withdrawButton') {
      $('#' + this.opts.location).append(`
         <div class="b-color s-c-b-options x-y-flex" style="margin-bottom:8px">
            <div>${this.opts.name}</div>
            
            <div class="changeCoordIcon"></div>

            <div>
              ${this.opts.optionsList
                .map((e) => {
                  return `
                  <button class="withdrawButton">${e.val}</button>
                `
                })
                .join('')}
            </div>

            <div class="flex">
              <div class="s-c-b-border"></div>

              <button class="s-c-b-button">
                <svg class="icon-withdraw" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </button>
            </div>

          </div>  
          `)
    }
    // 坐标框带撤回
    else if (this.opts.type == 'withdrawCoord') {
      $('#' + this.opts.location).append(`
         <div class="s-c-b-options x-y-flex" style="margin-bottom:8px">

              <div class="input-r">
                <div class="input-p">X</div>
                <input id="${this.opts.location}-X" class="withdrawCoordInput" />
              </div>
              
              <div class="input-r">
                <div class="input-p">Y</div>
                <input id="${this.opts.location}-Y" class="withdrawCoordInput" />
              </div>
              
              <div class="input-r">
                <div class="input-p">Z</div>
                <input id="${this.opts.location}-Z" class="withdrawCoordInput" />
              </div>
              
            <div class="flex">
              <div class="s-c-b-border"></div>

              <button class="s-c-b-button">
                <svg class="icon-withdraw" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </button>
            </div>

          </div>  
          `)
    }
    // 添加元素
    else if (this.opts.type == 'addElement') {
      $('#' + this.opts.location).append(`
         <div class="s-c-b-options x-y-flex" style="margin-bottom:8px">

           <div>${this.opts.name}</div>


           <div class="x-y-flex addElementBox">
            <div class="s-c-b-border"></div>
             <div>数组元素</div>
             <button class="s-c-b-button"></button>
             <button class="s-c-b-button"></button>
           </div>

         </div>  
          `)
    }
    // 确定按钮
    else if (this.opts.type == 'confirmButton') {
      $('#' + this.opts.location).append(`
              <button id="${this.opts.buttonId}" class="${this.opts.class}">
                ${this.opts.name}
              </button>
          `)
    }
    // 变换坐标框
    else if (this.opts.type == 'changeCoord') {
      $('#' + this.opts.location).append(`

       <div class="x-y-flex s-c-b-options" style="margin-bottom:8px">
       
          <select class="changeCoordSelect" name="" id="">
          ${this.opts.optionsList
            .map((e) => {
              return `
              <option>${e.val}</option>
            `
            })
            .join('')}
          </select>

          <svg class="changeCoordIcon" aria-hidden="true">
            <use xlink:href="${this.opts.icon}"></use>
          </svg>

          <div class="inputBoxOne x-flex">
            <div class="i-b-one"></div>
            <input class="changeCoordInput" type="number"/>
          </div>

          <div class="inputBoxTwo  x-flex">
            <div class="i-b-two"></div>
            <input class="changeCoordInput" type="number"/>
          </div> 

          <div class="inputBoxthree  x-flex">
            <div class="i-b-three"></div>
            <input class="changeCoordInput" type="number"/>
          </div>
          
          <div class="flex">
            <div class="s-c-b-border"></div>

            <button class="s-c-b-button">
              <svg class="icon-withdraw" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
              </svg>
            </button>
          </div>
       </div> 
     
          `)
    }
  }

  event() {
    //提示框
    $(function () {
      $('.e-s-btn').tooltip({
        track: true,
        classes: {
          'ui-tooltip': 'tooltip',
          'ui-tooltip-content': 'tooltip-content'
        },
        position: {
          my: 'left top+25'
        },
        content: function () {
          if ($(this).is('button')) {
            return `<div class="tooltipcontent-o">${this.title}</div>
                    <div class="tooltipcontent-t">选定对象上调用事件</div>
                    <div class="tooltipcontent-t">${this.name}</div>
                    `
          }
        }
      })
    })
    //标题开关
    $('.e-s-c-title')
      .off('click')
      .click(function () {
        let content = $(this).next()
        let icon = this.lastElementChild
        if ($(content).hasClass('none')) {
          $(content).removeClass('none')
          $(icon).attr('class', 'iconfont icon-shangla-xiaoxiao shousuColor')
        } else {
          $(content).addClass('none')
          $(icon).attr('class', 'iconfont icon-xia-xiaoxiao shousuColor')
        }
      })
    //设置取消按钮
    $('.cancelButton')
      .off('click')
      .click(function () {
        console.log(this)
      })
    //设置确定按钮
    $('.confirmButton')
      .off('click')
      .click(function () {
        console.log(this)
      })
  }
}
export { toolSet }
