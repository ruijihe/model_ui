/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-01 10:06:51
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-02-25 10:38:48
 * @FilePath: \RjhUitraEdit\src\webui\view\homePage\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class homePageBody {
  constructor() {
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

            <div class="m-p-setting"></div>
          </div>
        </div>

        <div id="modelingTools">
          <div class="modelingToolsContent"></div>
        </div>
      </div> 
    `)

    $('.m-p-setting').append(`
    
      <div class="m-p-s-title x-y-flex">

        <div class="x-y-flex">
          <div style="margin-left:3px">设置</div>
        </div>
        
      </div>

      <div class="m-p-s-content defaultColor"></div>

    `)
  }

  event() {
    $(function () {
      $('#modelingList').resizable({
        handles: 'e', //拖拽方向
        minWidth: 140
      })
    })
    $(function () {
      $('.m-p-setting').resizable({
        handles: 'e', //拖拽方向
        minWidth: 208
      })
    })
  }
}

new homePageBody()
