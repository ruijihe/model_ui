/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-03 09:12:25
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-02-25 11:47:16
 * @FilePath: \RjhUitraEdit\src\webui\view\modelProperties\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { toolSet } from '../../components/tools/toolSet.js'
import data from '../../../../static/data/modelingData.js'
let outlineList = data.outlineList
let res = outlineList
class modelProperties {
  constructor(options) {
    this.opts = Object.assign(
      {
        titleList: [
          { name: '所有', class: 'outlineBtnCheck', id: 'otAllBtn' },
          { name: '通用', class: '', id: 'otuniversalBtn' },
          { name: 'Actor', class: '', id: 'otActorBtn' },
          { name: 'LOD', class: '', id: 'otLodBtn' },
          { name: '杂项', class: '', id: 'otSundryBtn' },
          { name: '物理', class: '', id: 'otPhysicsBtn' },
          { name: '渲染', class: '', id: 'otRanderBtn' },
          { name: '流送', class: '', id: 'otDriftingBtn' }
        ]
      },
      options
    )
    const modelProperties = document.createElement('div')
    modelProperties.setAttribute('id', 'modelProperties')
    modelProperties.className = 'modelProperties'
    const Properties = document.querySelector('.modelingToolsContent')
    Properties.insertBefore(modelProperties, Properties.child)
    this.init()
  }

  init() {
    this.renderView()
    this.event()
  }

  renderView() {
    $('#modelProperties').append(`
      <div class="m-p-w-show iconfont icon-zuo-xiaoxiao none"></div>
      
      <div class="m-p-window">
        <div class="m-p-w-btn">
          <div class="iconfont icon-you-xiaoxiao"></div>
        </div>
      </div>

      <div class="m-p-s-show iconfont icon-zuo-xiaoxiao none"></div>

      <div class="m-p-s-box">
        <div class="m-p-s-b-title x-y-flex">
          <div class="x-y-flex">
            <svg class="icon-move" aria-hidden="true">
              <use xlink:href="#icon-tuodong"></use>
            </svg>

            <div style="margin-left:8px">细节</div>
          </div>

        </div>
      
        <div class="m-p-s-btn">
          <div class="iconfont icon-you-xiaoxiao"></div>
        </div>

        <div class="m-p-s-b-content">
          <div class="outlineTitle w-flex">
            ${this.opts.titleList
              .map((e) => {
                return `
                <button id="${e.id}" class="outlineBtn ${e.class}">${e.name}</button>
              `
              })
              .join('')}
          </div>

          <div class="outlineContent">
            ${res
              .map((outLineSettingList) => {
                return `
                <div class="s-c-box">
      
                  <div class="e-s-c-title x-y-flex">
                  ${outLineSettingList.name}
                    <div class="iconfont icon-shangla-xiaoxiao"></div>
                  </div>
      
                  <div style="padding:0 8px" id="${outLineSettingList.id}">
                    ${outLineSettingList.options
                      .map((options) => {
                        new toolSet({
                          publicSettingList: outLineSettingList,
                          location: outLineSettingList.id,
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
              })
              .join('')}

          </div>
        </div>
      </div>

    `)

    $('.m-p-window').append(`

      <div class="m-p-w-title">
        <div class="m-p-w-t-move"></div>
        <div class="m-p-w-t-3D m-p-view viewCheck">3D视图</div>
        <div class="m-p-w-t-plane m-p-view">平面视图</div>
      </div>

      <div class="m-p-w-window"></div>
    `)
  }
  event() {
    let that = this
    // 关闭视窗
    $('.m-p-w-btn').click(function () {
      let height = $('#modelingTools').height() - 25
      $('.m-p-window').addClass('none')
      //
      if ($('.m-p-window').hasClass('none')) {
        $('.m-p-w-show').removeClass('none')
        $('.m-p-s-box').height(height)
      }
    })
    // 打开视窗
    $('.m-p-w-show').click(function () {
      let height = $('#modelingTools').height() - 192
      $('.m-p-window').removeClass('none')
      $('.m-p-w-show').addClass('none')
      $('.m-p-s-box').height(height)
    })
    // 关闭设置
    $('.m-p-s-btn').click(function () {
      $('.m-p-s-box').addClass('none')
      $('.m-p-s-show').removeClass('none')
    })
    // 打开设置
    $('.m-p-s-show').click(function () {
      $('.m-p-s-box').removeClass('none')
      $('.m-p-s-show').addClass('none')
    })
    //切换视图
    $('.m-p-view').click(function () {
      $('.m-p-view').removeClass('viewCheck')
      $(this).addClass('viewCheck')
    })
    //点击标题
    $('.outlineBtn').click(function () {
      let id = this.innerHTML

      let reload = function () {
        $('.outlineContent').children().remove()
        $('.outlineContent').append(`
        ${res
          .map((outLineSettingList) => {
            return `
            <div class="s-c-box">

              <div class="e-s-c-title x-y-flex">
              ${outLineSettingList.name}
                <div class="iconfont icon-shangla-xiaoxiao"></div>
              </div>

              <div style="padding:0 8px" id="${outLineSettingList.id}">
                ${outLineSettingList.options
                  .map((options) => {
                    new toolSet({
                      publicSettingList: outLineSettingList,
                      location: outLineSettingList.id,
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
          })
          .join('')}
        `)
      }
      switch (id) {
        case '通用':
          res = outlineList.filter((item) => {
            return item.type === 'universal'
          })
          reload()
          break

        case 'Actor':
          res = outlineList.filter((item) => {
            return item.type === 'actor'
          })
          reload()
          break

        case 'LOD':
          res = outlineList.filter((item) => {
            return item.type === 'lod'
          })
          reload()
          break

        case '杂项':
          res = outlineList.filter((item) => {
            return item.type === ''
          })
          reload()
          break

        case '物理':
          res = outlineList.filter((item) => {
            return item.type === ''
          })
          reload()
          break

        case '渲染':
          res = outlineList.filter((item) => {
            return item.type === ''
          })
          reload()
          break

        case '流送':
          res = outlineList.filter((item) => {
            return item.type === ''
          })
          reload()
          break

        case '所有':
          res = outlineList
          reload()
          break

        default:
          break
      }

      $('.outlineBtn').removeClass('outlineBtnCheck')
      $(this).addClass('outlineBtnCheck')
    })
  }
}
new modelProperties()
