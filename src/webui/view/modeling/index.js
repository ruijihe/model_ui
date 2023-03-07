/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-01 14:36:53
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-03-07 14:28:57
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
                    <div class="iconfont icon-shangla-xiaoxiao shousuColor"></div>
                 </div>

                 <div>
                    <div class="m-c-content">
                      ${e.list
                        .map((iconList) => {
                          return `
                            <div title="${iconList.name}" id="${iconList.id}" class="m-c-box  ${iconList.class}">

                              <svg class="${iconList.iconclass}" aria-hidden="true">
                                <use xlink:href="${iconList.icon}"></use>
                              </svg>
 
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
    $(function () {
      $('.m-c-box').tooltip({
        track: true,
        classes: {
          'ui-tooltip': 'tooltip',
          'ui-tooltip-content': 'tooltip-content'
        },
        position: {
          my: 'left top+25'
        }
      })
    })

    //总隐藏开关
    $('.m-c-btn').click(function () {
      let modelingWidth = $('.modelingContent').width()

      // 点击左侧图标后
      if ($('.m-c-box').hasClass('m-c-box-check')) {
        console.log(111)
        // 关
        if (modelingWidth > 0) {
          $('#modelingList').css('display', 'none')
          $('.m-p-setting').addClass('none')
          $('#m-c-btn').attr('class', 'iconfont icon-you-xiaoxiao')
        }
        // 开
        else {
          $('#modelingList').css('display', 'block')
          $('.m-p-setting').removeClass('none')
          $('#m-c-btn').attr('class', 'iconfont icon-zuo-xiaoxiao')
        }
      }
      // 初始状态
      else {
        // 关
        if (modelingWidth > 0) {
          $('#modelingList').css('display', 'none')
          $('.m-p-setting').addClass('none')
          $('#m-c-btn').attr('class', 'iconfont icon-you-xiaoxiao')
        }
        // 开
        else {
          $('#modelingList').css('display', 'block')
          $('#m-c-btn').attr('class', 'iconfont icon-zuo-xiaoxiao')
        }
      }
    })
    // 类型开关
    $('.m-c-title').click(function () {
      let content = this.nextElementSibling
      let icon = this.lastElementChild

      if ($(content).hasClass('none')) {
        $(content).removeClass('none')
        $(icon).attr('class', 'iconfont icon-shangla-xiaoxiao shousuColor')
      } else {
        $(content).addClass('none')
        $(icon).attr('class', 'iconfont icon-xia-xiaoxiao shousuColor')
      }
    })

    // 选择操作

    $('.m-c-box').click(function () {
      $('.m-p-setting').removeClass('none')
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
