/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-01 14:36:53
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-02-28 09:19:46
 * @FilePath: \RjhUitraEdit\src\webui\view\modeling\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import data from '../../../../static/data/modelingData.js'
import { publicSetting } from '../../components/publicSetting/index.js'

class modelingList {
  constructor() {
    const modelingList = document.createElement('div')
    modelingList.setAttribute('id', 'modelingList')
    modelingList.className = 'modelingList'
    $('.modelingContent').prepend($(modelingList))
    this.init()
  }

  init() {
    this.renderView()
    this.event()
  }

  renderView() {
    let dataList = data.modelingData
    $('#modelingList').append(`

        <div class="m-title">
          <div>自由造型</div>
        </div>

        <div class="modelingListContent">
         ${dataList
           .map((e) => {
             return `
               <div class="m-content">

                 <div class="m-c-title">
                    <div style="color: #00559d;">${e.name}</div>
                    <div class="iconfont icon-shangla-xiaoxiao"></div>
                 </div>

                 <div>
                    <div class="m-c-content">
                      ${e.list
                        .map((iconList) => {
                          return `
                            <div id="${iconList.id}" class="m-c-box  ${iconList.class}">

                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="${iconList.icon}"></use>
                              </svg>

                              <div class="m-c-hint">
                                <div class="m-c-h-title">${iconList.name}</div>
                              </div>

                            </div>    

                            
                        `
                        })
                        .join('')}
                    </div>
                  </div>
               </div>
           `
           })
           .join('')}
        </div>  

        
    `)

    $('.modelingContent').append(`<div class="m-c-modelOperation"></div>`)
  }

  event() {
    //总隐藏开关
    $('.m-c-btn').click(function () {
      let modelingWidth = $('.modelingContent').width()
      // 关
      if (modelingWidth > 0) {
        $('#modelingList').css('display', 'none')
        $('.m-p-setting').css('display', 'none')
        // $('#modelingList').css('padding', '0px')
        $('#m-c-btn').attr('class', 'iconfont icon-you-xiaoxiao')
        // 立方体
        if ($('#cube').hasClass('m-c-box-check') || $('#edit').hasClass('m-c-box-check')) {
        }
      }
      // 开
      else {
        $('#modelingList').css('display', 'block')
        $('.m-p-setting').css('display', 'block')
        // $('#modelingList').css('padding', '0px 8px')
        $('#m-c-btn').attr('class', 'iconfont icon-zuo-xiaoxiao')
        // 立方体
        if ($('#cube').hasClass('m-c-box-check')) {
        }
      }
    })
    // 类型开关
    $('.m-c-title').click(function () {
      let content = this.nextElementSibling
      let icon = this.lastElementChild

      if ($(content).hasClass('none')) {
        $(content).removeClass('none')
        $(icon).attr('class', 'iconfont icon-shangla-xiaoxiao')
      } else {
        $(content).addClass('none')
        $(icon).attr('class', 'iconfont icon-xia-xiaoxiao')
      }
    })

    // 选择操作

    $('.m-c-box').click(function () {
      let arr = []
      let val = this.lastElementChild.firstElementChild.innerHTML
      let index = $(this).index()
      // 点击添加背景色
      $('.m-c-box').removeClass('m-c-box-check')
      $(this).addClass('m-c-box-check')
      //形状
      if ($(this).hasClass('shape')) {
        arr = data.shapeSettingList
        new publicSetting({ title: val, index: index, publicSettingList: arr })
      }
      //模型
      else if ($(this).hasClass('model')) {
        arr = data.modelSettingList
        let id = $(this).attr('id')
        new publicSetting({ title: val, index: index, publicSettingList: arr })

        switch (id) {
          //立方体
          case 'cube':
            break

          //编辑
          case 'edit':
            break

          //变形
          case 'transformation':
            break

          default:
            break
        }
      }
      //创造
      else if ($(this).hasClass('create')) {
        arr = data.createList
        new publicSetting({ title: val, index: index, publicSettingList: arr })
      }
      //TriModel
      else if ($(this).hasClass('triModel')) {
        arr = data.triModelList
        new publicSetting({ title: val, index: index, publicSettingList: arr })
      }
      //deForm
      else if ($(this).hasClass('deForm')) {
      }
      //transForm
      else if ($(this).hasClass('transForm')) {
      }
    })
  }
}

new modelingList()
