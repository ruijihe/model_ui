/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-01 10:06:51
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-03-20 18:12:07
 * @FilePath: \RjhUitraEdit\src\webui\view\homePage\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class homePageBody {
  constructor(options) {
    this.opts = Object.assign(
      {
        btnList: [
          { val: '选择对象(Q)', tooltip: '', icon: '#icon-xuanzhai', class: 'toolBarIcon' },
          {
            val: '选择并平移对象(W)',
            tooltip: '长按(Ctrl + Alt)获得更多信息',
            icon: '#icon-yidong',
            class: 'toolBarIcon'
          },
          {
            val: '选择并旋转对象(E)',
            tooltip: '长按(Ctrl + Alt)获得更多信息',
            icon: '#icon-xuanzhuanjiayidong',
            class: 'toolBarIcon'
          },
          {
            val: '选择并缩放对象(R)',
            tooltip: '长按(Ctrl + Alt)获得更多信息',
            icon: '#icon-suofang',
            class: 'toolBarIcon'
          },
          {
            val: '在世界场景和本地(对象)之间循环变形小工具坐标系(Ctrl + `)',
            tooltip: '长按(Ctrl + Alt)获得更多信息',
            icon: '#icon-shijie',
            class: 'toolBarIcon'
          },
          {
            val: '控制对象对齐表面的方式',
            tooltip: '',
            icon: '#icon-duiqibiaomian',
            class: 'toolBarIcon'
          },
          {
            val: '拖动对象时，启用/禁用对象自动对齐网格',
            tooltip: '',
            icon: '#icon-zidongduiqiwangluo',
            class: 'toolBarIcon'
          },
          { val: '启用/禁用将对象与旋转网格对齐', tooltip: '', icon: '#icon-jiaozhai', class: 'toolBarIcon' },
          {
            val: '启用/禁用将对象与缩放网格对齐',
            tooltip: '',
            icon: '#icon-suofangwangluoduiqi',
            class: 'toolBarIcon'
          },
          { val: '摄像机速度', tooltip: '', icon: '#icon-shexiangsuzhai', class: 'toolBarIcon' }
        ]
      },
      options
    )
    const homePageBody = document.createElement('div')
    homePageBody.setAttribute('id', 'homePageBody')
    homePageBody.className = 'homePageBody'
    const bodydom = document.querySelector('body')
    bodydom.insertBefore(homePageBody, bodydom.child)
    this.init()
  }

  init() {
    this.renderView()
    this.event()
  }

  renderView() {
    $('#homePageBody').append(`
      
      <div id="modelingHeader"></div>

      <div class="modelingBody ">
        <div id="modeling">
          <div class="modelingContent">
            <div class="m-c-btn">
              <div id="m-c-btn" class="iconfont icon-zuo-xiaoxiao"></div>
            </div>

            <div class="m-p-setting none"></div>
          </div>
        </div>

        <div id="toolBar">
          ${this.opts.btnList
            .map((ele) => {
              return `
                <button class="toolBarBtn" name="${ele.tooltip}" title="${ele.val}">
                  <svg class="${ele.class}" aria-hidden="true">
                    <use xlink:href="${ele.icon}"></use>
                  </svg>
                </button>
            `
            })
            .join('')}
        </div>

        <div id="modelingTools">
          <div class="modelingToolsContent"></div>
        </div>
      </div> 
    `)

    $('.m-p-setting').append(`
    


      <div class="m-p-s-content defaultColor overflow-y"></div>

    `)
  }

  event() {
    $(function () {
      $('#modelingList').resizable({
        handles: 'e', //拖拽方向
        minWidth: 140,
        maxWidth: 570
      })
    })
    $(function () {
      $('.m-p-setting').resizable({
        handles: 'e', //拖拽方向
        minWidth: 240
        // alsoResize: '.s-c-b-box'
      })
      // $('.s-c-b-box').resizable()
    })

    $(function () {
      $('.toolBarBtn').tooltip({
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
            return `<div class="t-b-title">${this.title}</div>
                    <div class="t-b-name">${this.name}</div>
                    `
          }
        }
      })
    })
  }
}

new homePageBody()
