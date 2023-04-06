/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-25 09:40:19
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-04-06 16:05:20
 * @FilePath: \RjhUitraEdit\src\webui\view\headerBar\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class headerBar {
  constructor() {
    this.init()
  }

  init() {
    this.renderView()
    this.event()
  }

  renderView() {
    let icoList = [
      { name: '文件', icon: '#icon-wenjian-1' },
      { name: '保存', icon: '#icon-baocun-1' },
      { name: '撤销', icon: '#icon-chexiao' },
      { name: '恢复', icon: '#icon-huifu' },
      { name: '删除', icon: '#icon-lajietong3' }
    ]
    $('#modelingHeader').append(`

      <div class="m-h-img flex">
        <svg class="icon-img" aria-hidden="true">
          <use xlink:href="#icon-bodi_2"></use>
        </svg>
        <div class="x-y-flex">睿几何设计平台</div>
      </div>

      <div class="m-h-handle x-y-flex">
      
        ${icoList
          .map((e) => {
            return `
            <div class="m-h-h-box clum-flex">
              <svg class="icon-handel" aria-hidden="true">
                <use xlink:href="${e.icon}"></use>
              </svg>
            </div>
          `
          })
          .join('')}

      </div>

      <div class="m-h-accomplish x-y-flex">

        <div class="m-h-h-box clum-flex">
          <svg class="icon-handel" aria-hidden="true">
            <use xlink:href="#icon-bangchu"></use>
          </svg>
        </div>

        <div class="m-h-h-box clum-flex">
          <svg class="icon-handel" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
        </div>

        <button class="m-h-a-btn">完成</button>
      </div>
      
    `)
  }

  event() {}
}

new headerBar()
