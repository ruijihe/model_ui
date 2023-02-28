/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-07 14:27:53
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-02-10 15:07:31
 * @FilePath: \RjhUitraEdit\src\webui\components\modelOperation\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import data from '../../../../static/data/modelingData.js'

class modelOperation {
  constructor(options) {
    this.opts = Object.assign(
      {
        id: '', //名称，
        index: 0
      },
      options
    )

    //初始化
    $('.m-c-modelOperation').children().remove()
    this.init()
  }
  init() {
    this.renderView()
    this.event()
  }

  renderView() {
    let modelOperationSettingList = data.modelOperationSettingList

    if (this.opts.id == 'transformation') {
      return
    } else {
      $('.m-c-modelOperation').append(`
        <div class="m-c-m-title">操作</div>

        <div class="m-s-content grid">
          ${modelOperationSettingList[this.opts.index].operateList
            .map((operateList) => {
              return `
              <div id="${operateList.id}" class="m-s-c-box clum-flex">

                <svg class="m-s-c-icon" aria-hidden="true">
                  <use xlink:href="${operateList.icon}"></use>
                </svg>

                <div>${operateList.val}</div>
              </div>
            `
            })
            .join('')}
          
        </div>
      `)
    }
  }
  event() {
    $('.m-s-c-box').click(function () {
      // 点击添加背景色
      $('.m-s-c-box').removeClass('m-s-c-box-check')
      $(this).addClass('m-s-c-box-check')
    })
  }
}
export { modelOperation }
