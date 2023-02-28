/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-16 09:58:40
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-02-27 16:28:29
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
            if (publicSettingList.name == '') {
              return `
              <div class="s-c-c-box">
                <div id="${publicSettingList.id}">
                  ${publicSettingList.options
                    .map((options) => {
                      new toolSet({
                        publicSettingList: publicSettingList,
                        location: publicSettingList.id,
                        name: options.val,
                        type: options.type,
                        icon: options.icon,
                        optionsList: options.optionsList,
                        checkboxList: options.checkboxList,
                        class: options.class,
                        buttonId: options.id
                      })
                    })
                    .join('')}
                 </div>    
              </div>
                `
            } else {
              return `
              <div class="s-c-box">

                <div class="e-s-c-title x-y-flex">
                ${publicSettingList.name}
                  <div class="iconfont icon-shangla-xiaoxiao"></div>
                </div>

                <div style="padding:0 8px" id="${publicSettingList.id}">
                  ${publicSettingList.options
                    .map((options) => {
                      new toolSet({
                        location: publicSettingList.id,
                        name: options.val,
                        type: options.type,
                        icon: options.icon,
                        optionsList: options.optionsList,
                        checkboxList: options.checkboxList
                      })
                    })
                    .join('')}
                 </div>    
              </div>
                `
            }
          })
          .join('')}
    `)
  }
  event() {}
}
export { publicSetting }
