/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-16 09:58:40
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-04-11 16:29:16
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
        // title: '', //名称，
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
    // $('.m-p-s-title').append(`
    //   <div class="x-y-flex">
    //     <div style="margin-left:3px">${this.opts.title}设置</div>
    //   </div>
    // `)

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

                 </div>    
              </div>
                `
          })
          .join('')}
    `)
    let tmpArr = []
    this.opts.publicSettingList[this.opts.index].typeList.forEach((publicSettingList) => {
      publicSettingList.options.forEach((options) => {
        tmpArr.push(
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
        )
      })
    })
    tmpArr.forEach((item) => {
      item.renderView()
      item.event()
    })
  }
  event() {
    let SubMenu = []
    let faceSubMenu = [
      {
        name: '当前操作',
        id: 'sub-one',
        options: [
          { val: 'Apply', class: 'e-s-btn SubMenuBtn', tooltip: 'Apply', type: 'button' },
          { val: 'Cancel', class: 'e-s-btn SubMenuBtn', tooltip: 'Cancel', type: 'button' }
        ]
      },
      {
        name: '挤压',
        id: 'sub-two',
        options: [
          {
            val: '距离模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在视口中点击' }, { val: '固定' }]
          },
          {
            val: '方向',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [
              { val: '选择法线' },
              { val: '世界X' },
              { val: '世界Y' },
              { val: '世界Z' },
              { val: '本地X' },
              { val: '本地Y' },
              { val: '本地Z' }
            ]
          },
          { val: '壳到固体', type: 'checkbox', class: 's-c-b-box', isChecked: 'true' },
          {
            val: '方向模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '单一方向' }, { val: '选定三角形法线' }, { val: '选定三角形法线平均' }]
          }
        ]
      },
      {
        name: '高级',
        id: 'sub-there',
        options: [{ val: '使用共线性设置边界组', type: 'checkbox', class: 's-c-b-box', isChecked: 'true' }]
      },
      {
        name: '选项',
        id: 'sub-four',
        options: [
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box', isChecked: '' },
          { val: '显示可选择角落', type: 'checkbox', class: 's-c-b-box', isChecked: 'true' },
          { val: '小工具可见', type: 'checkbox', class: 's-c-b-box', isChecked: 'true' }
        ]
      },
      {
        name: '小工具',
        id: 'sub-five',
        options: [
          {
            val: '来自几何体',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '' }, { val: '' }, { val: '' }]
          },
          { val: '锁定旋转', type: 'checkbox', class: 's-c-b-box', isChecked: '' }
        ]
      }
    ]

    let shapesSubMenu = [
      {
        name: '当前操作',
        id: 'shapes-one',
        options: [{ val: 'Done', class: 'e-s-btn SubMenuBtn', tooltip: 'Done', type: 'button' }]
      },
      {
        name: '剪切',
        id: 'shapes-two',
        options: [
          {
            val: '朝向',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '面部法线' }, { val: '查看方向' }]
          },
          { val: '对齐到顶点', type: 'checkbox', class: 's-c-b-box', isChecked: 'true' }
        ]
      },
      {
        name: '选项',
        id: 'shapes-four',
        options: [
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box', isChecked: '' },
          { val: '显示可选择角落', type: 'checkbox', class: 's-c-b-box', isChecked: 'true' },
          { val: '小工具可见', type: 'checkbox', class: 's-c-b-box', isChecked: 'true' }
        ]
      },
      {
        name: '小工具',
        id: 'shapes-five',
        options: [
          {
            val: '来自几何体',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '' }, { val: '' }, { val: '' }]
          },
          { val: '锁定旋转', type: 'checkbox', class: 's-c-b-box', isChecked: '' }
        ]
      }
    ]
    //polyEd二级菜单
    $(function () {
      $('.secondLevelBtn').click(function () {
        let btnVal = $(this).html()
        $('.m-p-s-content').addClass('none')
        $('.SubMenuContent').removeClass('none')

        switch (btnVal) {
          case 'Extrude':
            SubMenu = faceSubMenu
            break

          case 'OffSet':
            SubMenu = faceSubMenu
            break

          case 'Push Pull':
            SubMenu = faceSubMenu
            break

          case 'Inset':
            SubMenu = faceSubMenu
            break

          case 'OutSet':
            SubMenu = faceSubMenu
            break

          case 'Bevel':
            SubMenu = faceSubMenu
            break

          case 'Cut Faces':
            SubMenu = shapesSubMenu
            break

          default:
            break
        }

        $(function () {
          $('.SubMenuContent').append(
            `${SubMenu.map((item) => {
              return `
                <div class="s-c-box">
    
                  <div class="e-s-c-title x-y-flex">
                    ${item.name}
                    <div class="iconfont icon-shangla-xiaoxiao shousuColor"></div>
                  </div>
    
                  <div style="padding:0 8px" id="${item.id}">
    
                   </div>    
                </div>
                  `
            }).join('')}`
          )

          let tmpArr = []
          SubMenu.forEach((SubMenu) => {
            SubMenu.options.forEach((options) => {
              tmpArr.push(
                new toolSet({
                  location: SubMenu.id,
                  name: options.val,
                  type: options.type,
                  icon: options.icon,
                  class: options.class,
                  optionsList: options.optionsList,
                  tooltip: options.tooltip,
                  options: options
                })
              )
            })
          })
          tmpArr.forEach((item) => {
            item.renderView()
            item.event()
          })

          $('.SubMenuBtn').click(function () {
            let btnVal = $(this).html()
            $('.m-p-s-content').removeClass('none')
            $('.SubMenuContent').addClass('none')
            switch (btnVal) {
              case 'Apply':
                break

              case 'Cancel':
                break

              case 'Done':
                break

              default:
                break
            }
          })
        })
      })
    })
  }
}
export { publicSetting }
