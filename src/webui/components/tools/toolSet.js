/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-13 10:56:18
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-04-11 16:00:47
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
        class: '', //类名
        buttonId: '', //按钮id
        tooltip: '', //提示信息
        options: [] //二级选项内容
      },
      options
    )
  }

  renderView() {
    //输入框
    if (this.opts.type == 'input') {
      $('#' + this.opts.location).append(`
        <div class="x-y-flex s-c-b-options">
        
          <div>${this.opts.name}</div>
          
          <div class="retracementInput x-y-flex">
            <input value="${this.opts.options.num}" type="number" max="100" class="s-c-b-input" />
            <div class="s-c-b-border"></div>
            <button class="s-c-b-button">
              <svg class="icon-withdraw" >
                <use class="withdrawUse" xlink:href="#icon-fanhui"></use>
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
              <div class="${this.opts.options.class}">${this.opts.options.val}</div>
              <input type="checkbox" ${this.opts.options.isChecked} />
            </div>
        `)
    }

    //图片
    else if (this.opts.type == 'img') {
      $('#' + this.opts.location).append(
        `
          <div class="x-y-flex s-c-b-options">
                        
              <div class="x-y-flex s-c-b-o-box">
  
                <div class="czimg"></div>
      
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
              <div style="margin-bottom:8px">${this.opts.options.val}</div>

              <div class="x-y-flex">

                <div class="coordInputBox x-y-flex">
                  <div class="c-i-title">X</div>
                  <input value="${this.opts.options.xNum}" class="coordInput" type="number"/>
                </div>

                <div class="coordInputBox x-y-flex">
                  <div class="c-i-title">Y</div>
                  <input value="${this.opts.options.yNum}" class="coordInput" type="number"/>
                </div>

                <div class="coordInputBox x-y-flex">
                  <div class="c-i-title">Z</div>
                  <input value="${this.opts.options.zNum}" class="coordInput" type="number"/>
                </div>

              </div>
          </div>
        `)
    }
    // 按钮
    else if (this.opts.type == 'button') {
      $('#' + this.opts.location).append(`
              <button class="${this.opts.options.class}" name="${this.opts.options.tooltip}" title="${this.opts.options.val}">${this.opts.options.val}</button>
          `)
    }
    // 图标按钮
    else if (this.opts.type == 'iconButton') {
      $('#' + this.opts.location).append(`
              <button class="iconBtn" title="${this.opts.options.tooltip}">
                <svg class="icon-withdraw" aria-hidden="true">
                  <use xlink:href="${this.opts.options.icon}"></use>
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
             <div>${this.opts.options.num}数组元素</div>
             <button class="s-c-b-button">
              <svg class="icon-withdraw" aria-hidden="true">
                <use xlink:href="#icon-xinceng"></use>
              </svg>
             </button>

             <button class="s-c-b-button">
              <svg class="icon-withdraw" aria-hidden="true">
                <use xlink:href="#icon-shanshu"></use>
              </svg>
             </button>
           </div>

         </div>  
          `)
    }
    // 确定按钮
    else if (this.opts.type == 'confirmButton') {
      $('#' + this.opts.location).append(`
              <button id="${this.opts.options.id}" class="${this.opts.options.class}">
                ${this.opts.options.val}
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
    // 颜色框
    else if (this.opts.type == 'colorModule') {
      let options = this.opts.options
      $(function () {
        let setColor = `rgba(${options.inputList[0].num},${options.inputList[1].num},${options.inputList[2].num},${options.inputList[3].num})`
        $(`#${options.id}`).css('background-color', setColor)
      })
      $('#' + this.opts.location).append(`
        <div class="s-c-b-options">
         <div class="x-y-flex" style="margin-bottom: 12px;">
            <div>${this.opts.options.val}</div>
            <div class="t-s-colorBox" id="${this.opts.options.id}"></div>
          </div>

          <div class="x-y-flex">
            ${this.opts.options.inputList
              .map((inputList) => {
                return `
                <div class="x-y-flex t-s-colorInputBox">
                  <div class="t-s-colorText">${inputList.val}</div>
                  <input maxlength="3" id="${inputList.inputId}" value="${inputList.num}" class="t-s-colorInput">
                </div>
              `
              })
              .join('')}
          </div>
        </div>
       `)
    }
    // 可替换图标
    else if (this.opts.type == 'replaceEngrave') {
      $('#' + this.opts.location).append(`
        <div class="re-one x-y-flex">
          <div class="re-iconBox">
            <svg class="re-icon" aria-hidden="true">
              <use xlink:href="${this.opts.options.iconVal}"></use>
            </svg>

            <div class="re-brushBox none">
              <div style="margin-bottom:8px">笔刷类型</div>
              <div class="w-flex">
                ${this.opts.options.iconList
                  .map((item) => {
                    return `
                      <div class="re-brushIconBox">
                        <svg class="re-brushIcon" aria-hidden="true">
                          <use xlink:href="${item.icon}"></use>
                        </svg>

                        <div>${item.val}</div>
                      </div>
                    `
                  })
                  .join('')}
              </div>
            </div>
          </div>
          
          <div class="re-selectBox">
              <div style="margin-bottom:8px" class="x-y-flex">
                <div>衰减</div>

                <select class="s-c-b-select" name="" id="">
                ${this.opts.options.selectList
                  .map((ele) => {
                    return `
                  <option>${ele.val}</option>
                  `
                  })
                  .join('')}
                </select>
              </div>

              <button class="re-freezeBtn">冻结目标</button>
          </div>
        </div>

        <div class="re-two">
          <div>地区</div>
          <div>
            ${this.opts.options.btnList
              .map((ele) => {
                return `
              <button class="re-btn">${ele.val}</button>
              `
              })
              .join('')}

          </div>
        </div>
      `)
    }
    // 可替换图标带输入框
    else if (this.opts.type == 'replaceEngraveInput') {
      $('#' + this.opts.location).append(`
        <div class="re-one x-y-flex">
          <div class="re-iconBox">
            <svg class="re-icon" aria-hidden="true">
              <use xlink:href="${this.opts.options.iconVal}"></use>
            </svg>

            <div class="re-brushBox none">
              <div style="margin-bottom:8px">纹路贴图</div>
              <div class="w-flex">
                ${this.opts.options.iconList
                  .map((item) => {
                    return `
                      <div class="re-brushIconBox">
                        <svg class="re-brushIcon" aria-hidden="true">
                          <use xlink:href="${item.icon}"></use>
                        </svg>

                        <div>${item.val}</div>
                      </div>
                    `
                  })
                  .join('')}
              </div>
            </div>
          </div>
          
          <div class="re-selectBox">
            <div class="x-y-flex" style="margin-bottom:4px">
              <div>角度</div>
              <input style="margin-left:8px" class="s-c-b-input"/>
              <div class="s-c-b-border"></div>
              <button class="s-c-b-button">
                <svg class="icon-withdraw" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </button>
            </div>

            <div class="x-y-flex">
              <button class="t-s-btn">随机</button>
              <input disabled="disabled" class="s-c-b-input t-s-b-input disabledStyle"/>
              <div class="s-c-b-border"></div>
              <button class="s-c-b-button">
                <svg class="icon-withdraw" aria-hidden="true">
                  <use xlink:href="#icon-fanhui"></use>
                </svg>
              </button>
            </div>
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
      $('.iconBtn').tooltip({
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
            return `
                    <div style="font-size:12px;font-weight: 300;">${this.title}</div>
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

    //颜色框input输入
    $('.t-s-colorInput')
      .off('change')
      .change(function () {
        let colorBox = $(this).parent().parent().siblings().children('.t-s-colorBox')[0]
        let oldRgb = $(colorBox).css('background-color')
        let id = $($(this).siblings()[0]).text()
        let setColor = ''
        function getRGB(str) {
          var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/)
          return match
            ? {
                red: match[1],
                green: match[2],
                blue: match[3]
              }
            : {}
        }
        let oldRgbStr = getRGB(oldRgb)
        switch (id) {
          case 'R':
            oldRgbStr.red = $(this).val()
            setColor = `rgb(${$(this).val()},${oldRgbStr.green},${oldRgbStr.blue})`
            $(colorBox).css('background-color', setColor)
            break

          case 'G':
            oldRgbStr.green = $(this).val()
            setColor = `rgb(${oldRgbStr.red},${$(this).val()},${oldRgbStr.blue})`
            $(colorBox).css('background-color', setColor)
            break

          case 'B':
            oldRgbStr.blue = $(this).val()
            setColor = `rgb(${oldRgbStr.red},${oldRgbStr.green},${$(this).val()})`
            $(colorBox).css('background-color', setColor)
            break

          case 'A':
            $(colorBox).css({ opacity: $(this).val() })
            break

          default:
            break
        }
        let newRgb = $(colorBox).css('background-color')
      })
    // replaceEngrave组件
    $(function () {
      //冻结按钮
      $('.re-freezeBtn')
        .off('click')
        .click(function () {
          if ($(this).hasClass('freezeBtnColor')) {
            $(this).removeClass('freezeBtnColor')
          } else {
            $(this).addClass('freezeBtnColor')
          }
        })
      // 地区
      $('.re-btn')
        .off('click')
        .click(function () {
          $('.re-btn').removeClass('freezeBtnColor')
          $(this).addClass('freezeBtnColor')
        })
      // 弹出笔刷
      $('.re-iconBox')
        .off('click')
        .click(function (e) {
          let box = this.lastElementChild
          if ($(box).hasClass('none')) {
            $('.m-p-s-content').removeClass('overflow-y')
            $(box).removeClass('none')
          } else {
            $(box).addClass('none')
            $('.m-p-s-content').addClass('overflow-y')
          }
        })
      // 替换笔刷
      $('.re-brushIconBox')
        .off('click')
        .click(function () {
          $('.re-brushIconBox').removeClass('r-b-i-check')
          $(this).addClass('r-b-i-check')
          let clickBox = $($(this).children()[0].children).attr('xlink:href')
          let iconBox = $($(this).parent().parent().parent().children()[0].children[0])
          $(iconBox).attr('xlink:href', `${clickBox}`)
          $('.re-brushBox').addClass('none')
          $('.m-p-s-content').addClass('overflow-y')
          event.stopPropagation()
        })
      //随机按钮
      $('.t-s-btn')
        .off('click')
        .click(function () {
          if ($(this).hasClass('freezeBtnColor')) {
            $(this).removeClass('freezeBtnColor')
            $('.t-s-b-input').attr('disabled', 'disabled')
            $('.t-s-b-input').addClass('disabledStyle')
          } else {
            $(this).addClass('freezeBtnColor')
            $('.t-s-b-input').removeAttr('disabled')
            $('.t-s-b-input').removeClass('disabledStyle')
          }
        })
    })
    //撤回按钮
    $(function () {
      $('.s-c-b-button')
        .off('click')
        .click(function () {
          if ($(this).hasClass('disabledBtnStyle')) {
            $(this).removeClass('disabledBtnStyle')
          } else {
            $(this).addClass('disabledBtnStyle')
            $('.withdrawUse').attr('fill', 'red')
          }
        })
    })
  }
}
export { toolSet }
