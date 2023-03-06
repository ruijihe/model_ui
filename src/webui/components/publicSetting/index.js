/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-16 09:58:40
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-03-06 17:32:06
 * @FilePath: \RjhUitraEdit\src\webui\components\publicSetting\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { toolSet } from '../../components/tools/toolSet.js'

class publicSetting {
  constructor(options) {
    this.opts = Object.assign(
      {
        title: '', //名称，
        index: 0,
        publicSettingList: []
      },
      options
    )

    //
    $('.m-p-s-title').children().remove()
    $('.m-p-s-content').children().remove()
    this.init()
  }
  init() {
    this.renderView()
    this.event()
  }

  renderView() {
    $('.m-p-s-title').append(`
      <div class="x-y-flex">
        <div style="margin-left:3px">${this.opts.title}设置</div>
      </div>
    `)

    $('.m-p-s-content').append(`
    
        ${this.opts.publicSettingList[this.opts.index].typeList
          .map((publicSettingList) => {
            return `
              <div class="s-c-box ${publicSettingList.position == 'ture' ? 'btnPosition' : ''}">

                <div class="e-s-c-title x-y-flex">
                  ${publicSettingList.name}
                  <div class="iconfont icon-shangla-xiaoxiao shousuColor"></div>
                </div>

                <div style="padding:0 8px" id="${publicSettingList.id}">
                  ${publicSettingList.options
                    .map((options) => {
                      new toolSet({
                        location: publicSettingList.id,
                        name: options.val,
                        type: options.type,
                        icon: options.icon,
                        class: options.class,
                        optionsList: options.optionsList,
                        tooltip: options.tooltip,
                        options: options
                      })
                    })
                    .join('')}
                 </div>    
              </div>
                `
          })
          .join('')}
    `)
  }
  event() {}
}
export { publicSetting }
