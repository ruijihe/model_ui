/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-04-10 08:45:21
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-04-10 09:12:38
 * @FilePath: \RjhUitraEdit\src\webui\components\tools\createBar.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class createBar {
  constructor() {
    this.list = {}
  }

  addDom() {
    $('.createBar').children().remove()

    $('#homePageBody').append(`
     <div class="createBar">
       <div class="createDom">
         <div></div>
         <div></div>
         <button>取消</button>
         <button>确认</button>
       </div>
     </div>
    `)

    $('.createBar').click(function () {})
  }
}

const addCreateBar = new createBar()

export default addCreateBar
