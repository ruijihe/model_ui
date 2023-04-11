/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-01 14:36:53
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-04-11 16:46:32
 * @FilePath: \RjhUitraEdit\src\webui\view\modeling\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import data from '../../../../static/data/modelingData.js'
import { publicSetting } from '../../components/publicSetting/index.js'
import SignalsTool from '../../../common/Signals.js'
import addCreateBar from '../../components/tools/createBar.js'

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

        <div id="searchInputBox" class="x-y-flex">
          <input id="searchInput">
          
          <i class="iconfont icon-xiaoding-xiankuang searchIcon"></i>
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
                            <div title="${iconList.tooltip}" id="${iconList.id}" class="m-c-box ${iconList.label} ${iconList.class}">

                              <svg class="${iconList.iconclass}" aria-hidden="true">
                                <use xlink:href="${iconList.icon}"></use>
                              </svg>

                              <div style="margin-top:12px">${iconList.label}</div>
 
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

    $('.modelingContent').append(`<div id="accomplishBox" class="accomplishBox"></div>`)
  }

  event() {
    $('.modelingListContent').scroll(function () {
      // console.log($(this).scrollTop())
    })
    $(function () {
      //输入框数据操作
      const projects = data.modelingData
      let newArr = []
      let optionArr = []
      let optionList = []
      optionArr = projects.map((item) => {
        const list = item.list
        newArr.push(...list)
        optionList = newArr.filter((item, index) => {
          return newArr.findIndex((obj) => obj.id === item.id) === index
        })
        return optionList
      })
      let searchArr = optionArr[optionArr.length - 1]
      //返回index
      function filterArr(val, id) {
        const name = val
        const arr = projects.filter((item) => {
          return item.name === name
        })
        const index = arr[0].list.findIndex((obj) => obj.label === id)
        return index
      }
      // 搜索框
      $('#searchInput')
        .autocomplete({
          minLength: 0,
          source: searchArr,
          classes: {
            'ui-autocomplete': 'tooltipBox'
          },
          select: function (event, ui) {
            const val = ui.item.class
            const label = ui.item.label
            const index = filterArr(val, label)

            const offset = $(`.${label}`).offset()
            const offsetTop = offset.top
            console.log(offsetTop)
            // 样式操作
            $('.m-p-setting').removeClass('none')
            $('.m-c-box').removeClass('m-c-box-check')
            $(`.${label}`).addClass('m-c-box-check')

            // 渲染视图
            let arr = []
            switch (val) {
              // 形状
              case 'Shapes':
                arr = data.shapeSettingList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // 模型
              case 'PolyModel':
                arr = data.modelSettingList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // 创造
              case 'Create':
                arr = data.createList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // TriModel
              case 'TriModel':
                arr = data.triModelList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // deForm
              case 'Deform':
                arr = data.deFormList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // transForm
              case 'Transform':
                arr = data.transFormList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // MeshOpsList
              case 'MeshOps':
                arr = data.MeshOpsList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // VoxOpsList
              case 'VoxOps':
                arr = data.VoxOpsList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // AttributesList
              case 'Attributes':
                arr = data.AttributesList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // UVsList
              case 'UVs':
                arr = data.UVsList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // BakingList
              case '':
                arr = data.BakingList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // VolumesList
              case '':
                arr = data.VolumesList
                new publicSetting({ index: index, publicSettingList: arr })
                break
              // LODsList
              case '':
                arr = data.LODsList
                new publicSetting({ index: index, publicSettingList: arr })
                break

              default:
                break
            }

            $('#searchInput').val(ui.item.label)

            return false
          }
        })
        .autocomplete('instance')._renderItem = function (ul, item) {
        let searchTerm = $('#searchInput').val()
        if (searchTerm === '') {
          return $('<li class="tooltipOption">')
        } else {
          return $('<li class="tooltipOption">')
            .append(
              `
            <div style="height:32px" class="x-y-flex">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="${item.icon}"></use>
                </svg>
              </div>
              <div class="ui-label">${item.label}</div>
            </div>
          `
            )
            .appendTo(ul)
        }
      }
    })

    // tooltip
    $(function () {
      $('.m-c-box').tooltip({
        track: true,
        classes: {
          'ui-tooltip': 'ico-tooltip',
          'ui-tooltip-content': 'ico-tooltip-content'
        },
        position: {
          my: 'left top+35'
        },
        content: function () {
          if ($(this).is('div')) {
            return `<div>${this.title}</div>
                    `
          }
        }
      })
    })

    //隐藏开关
    $(function () {
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
    })

    //类型开关
    $(function () {
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
    })

    // 选择操作
    $(function () {
      $('.m-c-box').click(function () {
        $('.m-p-setting').removeClass('none')
        $('.m-p-s-content').removeClass('none')
        $('.SubMenuContent').addClass('none')
        let arr = []
        let index = $(this).index()
        // 点击添加背景色
        $('.m-c-box').removeClass('m-c-box-check')
        $(this).addClass('m-c-box-check')
        //形状
        if ($(this).hasClass('Shapes')) {
          console.log('id -- ', this.id, SignalsTool)
          arr = data.shapeSettingList
          new publicSetting({ index: index, publicSettingList: arr })
          SignalsTool.dispatch('dispatchShape', this.id)
        }
        //模型
        else if ($(this).hasClass('PolyModel')) {
          let id = $(this).attr('id')
          arr = data.modelSettingList
          new publicSetting({ index: index, publicSettingList: arr })
          SignalsTool.dispatch('PolyEd')
        }
        //创造
        else if ($(this).hasClass('Create')) {
          arr = data.createList
          new publicSetting({ index: index, publicSettingList: arr })
        }
        //TriModel
        else if ($(this).hasClass('TriModel')) {
          arr = data.triModelList
          new publicSetting({ index: index, publicSettingList: arr })
        }
        //Deform
        else if ($(this).hasClass('Deform')) {
          arr = data.deFormList
          new publicSetting({ index: index, publicSettingList: arr })
        }
        //Transform
        else if ($(this).hasClass('Transform')) {
          arr = data.transFormList
          new publicSetting({ index: index, publicSettingList: arr })
        }
        //MeshOps
        else if ($(this).hasClass('MeshOps')) {
          console.log('MeshOps')
          arr = data.MeshOpsList
          new publicSetting({ index: index, publicSettingList: arr })
        }
        //VoxOps
        else if ($(this).hasClass('VoxOps')) {
          console.log('VoxOps')
          arr = data.VoxOpsList
          new publicSetting({ index: index, publicSettingList: arr })
        }
        //Attributes
        else if ($(this).hasClass('Attributes')) {
          console.log('Attributes')
          arr = data.AttributesList
          new publicSetting({ index: index, publicSettingList: arr })
        }
        //UVs
        else if ($(this).hasClass('UVs')) {
          console.log('UVs')
          arr = data.UVsList
          new publicSetting({ index: index, publicSettingList: arr })
        }
      })
    })
  }
}

new modelingList()
