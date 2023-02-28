/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-01 15:09:00
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-02-28 09:37:45
 * @FilePath: \RjhUitraEdit\static\data\modelingData.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

/**
 * type:'input' 输入框
 * type:'checkbox' 单选框
 * type:'switchBox' 可开关容器
 * type:'select' 下拉框
 * type:'button' 按钮
 * type:'img' 图片
 * type:'coord' 坐标框
 */
const modelOperationSettingList = [
  {
    name: '立方体',
    operateList: [
      { val: '挤出模型', icon: '#icon-jichumuxing', id: 'extrusionModel' },
      { val: '推回模型', icon: '#icon-tuihuimuxing', id: 'retropulsionModel' },
      { val: '滑出模型', icon: '#icon-huachumuxing', id: 'slideModel' },
      { val: '滑回模型', icon: '#icon-huahuimuxing', id: 'slidebackModel' },
      { val: '转角模式', icon: '#icon-zhuanjiaomushi', id: 'angleMode' },
      { val: '翻转', icon: '#icon-fanzhuan-2', id: 'overturn' }
    ]
  },
  {
    name: '编辑',
    operateList: [
      { val: '挤出', icon: '#icon-jichu', id: 'extrusionEdit' },
      { val: 'Offset', icon: '#icon-Offset', id: 'Offset' },
      { val: 'lnset', icon: '#icon-lnset', id: 'lnset' },
      { val: 'Outset', icon: '#icon-Outset', id: 'Outset' },
      { val: '斜角', icon: '#icon-xiejiao', id: 'obliqueAngle' },
      { val: '合并', icon: '#icon-hebing-1', id: 'merge' },
      { val: '面部切割', icon: '#icon-mianbuqige', id: 'facialCutting' },
      { val: '面部翻转', icon: '#icon-mianbufanzhuan', id: 'facialOverturn' },
      { val: '重分三角', icon: '#icon-tongfensanjiao', id: 'triangulation' },
      { val: '断开面部', icon: '#icon-duankaimianbu', id: 'breakFacial' },
      { val: '复制面部', icon: '#icon-fuzhimianbu', id: 'copyFacial' }
    ]
  }
]
const modelingData = [
  {
    name: '形状',
    list: [
      { name: '矩形', tooltip: '', icon: '#icon-juxing-3', class: 'shape', id: 'rectangle' },
      { name: '圆柱', tooltip: '', icon: '#icon-yuanzhu', class: 'shape', id: 'cylinder' },
      { name: '球形', tooltip: '', icon: '#icon-qiuxing', class: 'shape', id: 'sphere' },
      { name: '锥形', tooltip: '', icon: '#icon-zhuixing', class: 'shape', id: 'taper' },
      { name: '环形', tooltip: '', icon: '#icon-huanxing', class: 'shape', id: 'annular' },
      { name: '箭头', tooltip: '', icon: '#icon-jiantou-1', class: 'shape', id: 'arrows' },
      { name: '方片', tooltip: '', icon: '#icon-fangpian', class: 'shape', id: 'fangpian' },
      { name: '碟片', tooltip: '', icon: '#icon-shepian', class: 'shape', id: 'disc' },
      { name: '梯形', tooltip: '', icon: '#icon-tixing-1', class: 'shape', id: 'trapezoid' }
    ]
  },
  {
    name: '模型',
    list: [
      { name: '挤出模型', tooltip: '', icon: '#icon-jichumuxing', class: 'model', id: 'cube' },
      { name: '编辑', tooltip: '', icon: '#icon-bianji-2', class: 'model', id: 'edit' },
      { name: '变形', tooltip: '', icon: '#icon-bianxing', class: 'model', id: 'transformation' },
      { name: '网格布尔', tooltip: '', icon: '#icon-wangluobuer', class: 'model', id: 'mshBool' },
      { name: '布尔分割', tooltip: '', icon: '#icon-buerfenge', class: 'model', id: 'mshCut' },
      { name: '细分', tooltip: '', icon: '#icon-xifen', class: 'model', id: 'subDiv' }
    ]
  },
  {
    name: '创造',
    list: [
      { name: 'PolyExt', tooltip: '', icon: '#icon-PolyExt', class: 'create', id: 'PolyExt' },
      { name: 'PathExt', tooltip: '', icon: '#icon-PathExt', class: 'create', id: 'PathExt' },
      { name: '路径定义', tooltip: '', icon: '#icon-luojingxiuding', class: 'create', id: 'pathDefinition' },
      { name: 'BdryRev', tooltip: '', icon: '#icon-BdryRev', class: 'create', id: 'BdryRev' },
      { name: 'Pattern', tooltip: '', icon: '#icon-Pattern', class: 'create', id: 'Pattern' },
      { name: 'Mashup', tooltip: '', icon: '#icon-Mashup', class: 'create', id: 'Mashup' },
      { name: '附加', tooltip: '', icon: '#icon-bujia', class: 'create', id: 'subjoin' }
    ]
  },
  {
    name: '三角形编辑',
    list: [
      { name: 'TriSel', tooltip: '', icon: '#icon-TriSel', class: 'triModel', id: 'TriSel' },
      { name: 'TriED', tooltip: '', icon: '#icon-sanjiaoxingbianji', class: 'triModel', id: 'TriED' },
      { name: 'HFill', tooltip: '', icon: '#icon-chenbutong', class: 'triModel', id: 'HFill' },
      { name: 'Mirror', tooltip: '', icon: '#icon-jingxiang', class: 'triModel', id: 'Mirror' },
      { name: 'PinCut', tooltip: '', icon: '#icon-pingmianjianqi', class: 'triModel', id: 'PinCut' },
      { name: 'PolyCut', tooltip: '', icon: '#icon-PolyCut', class: 'triModel', id: 'PolyCut' },
      { name: 'Trim', tooltip: '', icon: '#icon-Trim', class: 'triModel', id: 'Trim' }
    ]
  },
  {
    name: '造型',
    list: [{ name: '', tooltip: '', icon: '#icon-PolyExt', class: 'deForm', id: '' }]
  },
  {
    name: '变换',
    list: [{ name: '', tooltip: '', icon: '#icon-PolyExt', class: 'transForm', id: '' }]
  }
]

const shapeSettingList = [
  {
    name: '矩形',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'boxCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'boxConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '宽度', type: 'input' },
          { val: '深度', type: 'input' },
          { val: '高度', type: 'input' },
          { val: '宽度细分', type: 'input' },
          { val: '深度细分', type: 'input' },
          { val: '高度细分', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '圆柱',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'cylinderCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'cylinderConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '半径', type: 'input' },
          { val: '高度', type: 'input' },
          { val: '径像切片', type: 'input' },
          { val: '高度细分', type: 'input' },
          { val: '深度细分', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '球形',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'sphereCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'sphereConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '半径', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          },
          { val: '细分', type: 'input' },
          { val: '水平切片', type: 'input' },
          { val: '垂直切片', type: 'input' },
          { val: '多边形组模式', type: 'select', optionsList: [{ val: '多面' }, { val: '每面' }] }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '锥形',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'coneCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'coneConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '半径', type: 'input' },
          { val: '高度', type: 'input' },
          { val: '径向切片', type: 'input' },
          { val: '高度细分', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '环形',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'torusCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'torusConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '大半径', type: 'input' },
          { val: '小半径', type: 'input' },
          { val: '主要切片', type: 'input' },
          { val: '小切片', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '箭头',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'arrowCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'arrowsConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '杆半径', type: 'input' },
          { val: '杆高度', type: 'input' },
          { val: '头半径', type: 'input' },
          { val: '头高度', type: 'input' },
          { val: '径向切片', type: 'input' },
          { val: '高度细节', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '方片',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'rectCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'rectConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '矩形类型', type: 'select', optionsList: [{ val: '矩形' }, { val: '圆盘' }] },
          { val: '宽度', type: 'input' },
          { val: '深度', type: 'input' },
          { val: '宽度细化', type: 'input' },
          { val: '深度细化', type: 'input' },
          { val: '角半径', type: 'input' },
          { val: '角切片', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '碟片',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'discCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'discConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '矩形类型', type: 'select', optionsList: [{ val: '矩形' }, { val: '圆盘' }] },
          { val: '半径', type: 'input' },
          { val: '径向切片', type: 'input' },
          { val: '径向细分', type: 'input' },
          { val: '洞半径', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '梯形',
    typeList: [
      {
        name: '',
        id: 'confirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'stairsCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'stairsConfirmBtn'
          }
        ]
      },
      {
        name: '设置',
        id: 'outType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          {
            val: '楼梯类型',
            type: 'select',
            optionsList: [{ val: '线性' }, { val: '浮动' }, { val: '弯曲' }, { val: '螺旋' }]
          },
          { val: '步骤数', type: 'input' },
          { val: '步宽', type: 'input' },
          { val: '步高', type: 'input' },
          { val: '曲线角度', type: 'input' },
          { val: '螺旋角', type: 'input' },
          { val: '内部半径', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '枢轴点位置', type: 'select', optionsList: [{ val: '在场景上' }, { val: '底部' }] },
          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  }
]

const modelSettingList = [
  {
    name: '立方体',
    typeList: [
      {
        name: '选项',
        id: 'cubeOptions',
        options: [
          { val: '网格框架原点', type: 'coord' },
          { val: '网格框架朝向', type: 'coord' },
          { val: '显示小工具', type: 'checkbox' },
          { val: '网格幂', type: 'input' },
          { val: '当前块大小', type: 'input' },
          { val: '每块的步', type: 'input' },
          { val: '斜向对角', type: 'checkbox' },
          { val: '高级', type: 'advanced' }
        ]
      },
      {
        name: '高级',
        id: 'advancedOne',
        options: [
          { val: '二次幂块大小', type: 'checkbox' },
          { val: '块基础大小', type: 'input' },
          { val: '保持侧组', type: 'checkbox' }
        ]
      },
      { name: '块选择', id: 'pieceOptions', options: [{ val: '命中无关几何体', type: 'checkbox' }] },
      {
        name: '高级',
        id: 'advancedTwo',
        options: [
          { val: '命中网格地平面', type: 'checkbox' },
          {
            val: '面选择模式',
            type: 'select',
            optionsList: [
              { val: '外部基于法线' },
              { val: '内部基于法线' },
              { val: '外部基于视图光线' },
              { val: '内部基于视图光线' }
            ]
          }
        ]
      },
      {
        name: '输出',
        id: 'cubeOutput',
        options: [
          {
            val: '面选择模式',
            type: 'select',
            optionsList: [{ val: '静态网' }, { val: '体积' }, { val: '动态网' }]
          }
        ]
      },
      {
        name: '材质',
        id: 'cubeTexture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox' },
          { val: '显示线框', type: 'checkbox' }
        ]
      }
    ]
  },
  {
    name: '编辑',
    typeList: [
      {
        name: '操作',
        id: 'shapeHandle',
        options: [
          { val: '挤出', tooltip: '', icon: '#icon-jichu', type: 'button' },
          { val: 'offSet', tooltip: '', icon: '#icon-Offset_1', type: 'button' },
          { val: 'lnset', tooltip: '', icon: '#icon-lnset', type: 'button' },
          { val: 'outSet', tooltip: '', icon: '#icon-Outset', type: 'button' },
          { val: '斜角', tooltip: '', icon: '#icon-xiejiao', type: 'button' },
          { val: '合并', tooltip: '', icon: '#icon-hebing-1', type: 'button' },
          { val: '面部切割', tooltip: '', icon: '#icon-mianbuqige', type: 'button' },
          { val: '面部翻转', tooltip: '', icon: '#icon-mianbufanzhuan', type: 'button' },
          { val: '重分三角', tooltip: '', icon: '#icon-tongfensanjiao', type: 'button' },
          { val: '断开面部', tooltip: '', icon: '#icon-duankaimianbu', type: 'button' }
        ]
      },
      {
        name: '形状编辑',
        id: 'shapeEditing',
        options: [
          { val: '插入边缘', icon: '#icon-zharubianhuan1', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '', icon: '', type: 'button' }
        ]
      },
      {
        name: '边缘编辑',
        id: 'edgeEditing',
        options: [
          { val: '焊接', icon: '#icon-hanxie', type: 'button' },
          { val: '伸直', icon: '#icon-shenzhi', type: 'button' },
          { val: '填充孔', icon: '#icon-chenchongkong', type: 'button' },
          { val: '斜角_1', icon: '#icon-xiejiao_1', type: 'button' },
          { val: '桥', icon: '#icon-qiao', type: 'button' }
        ]
      },
      {
        name: 'UV',
        id: 'UV',
        options: [{ val: '平面投影', icon: '#icon-pingmiantouying', type: 'button' }]
      },
      {
        name: '选择操作',
        id: 'selectingOperation',
        options: [
          { val: '反相选区', icon: '#icon-fanxiangxuanqu', type: 'button' },
          { val: '全选', icon: '#icon-quanxuan', type: 'button' }
        ]
      },
      {
        name: '选项过滤器',
        id: 'optionFilter',
        options: [
          { val: '选择点', icon: '#icon-xuanzhaidian', type: 'button' },
          { val: '选择线', icon: '#icon-xuanzhaixian', type: 'button' },
          { val: '选择面', icon: '#icon-xuanzhaimian', type: 'button' },
          { val: '插入边缘1', icon: '#icon-zharubianhuan1', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' }
        ]
      },
      {
        name: '正交视口行为',
        id: 'otViewport',
        options: [
          { val: '首选投影元素', type: 'checkbox' },
          { val: '选择下射线', type: 'checkbox' },
          { val: '忽略遮挡', type: 'checkbox' }
        ]
      },
      {
        name: '高级',
        id: 'edAdvanced',
        options: [
          { val: '命中返回面', type: 'checkbox' },
          { val: '启动边框', type: 'checkbox' }
        ]
      },
      {
        name: '选项',
        id: 'edSelect',
        options: [
          { val: '显示可选择角落', type: 'checkbox' },
          { val: '小工具可见', type: 'checkbox' }
        ]
      },
      {
        name: '小工具',
        id: 'edTool',
        options: [
          { val: '本地帧模式', type: 'select', optionsList: [{ val: '来自几何体' }] },
          { val: '锁定旋转', type: 'checkbox' }
        ]
      },
      {
        name: '拓扑选项',
        id: 'edTopology',
        options: [
          { val: '再生额外的角落', icon: '#icon-zaishengewaidijiaola', type: 'button' },
          { val: '添加额外的角', type: 'checkbox' },
          { val: '额外角度度数', type: 'input' }
        ]
      }
    ]
  }
]

const triModelList = [
  {
    name: 'triSel',
    typeList: [
      {
        name: '选项编辑',
        id: 'selectEditing',
        options: [
          { val: '插入边缘', icon: '#icon-zharubianhuan1', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' },
          { val: '插入边缘2', icon: '#icon-zharubianyuan2', type: 'button' }
        ]
      }
    ]
  }
]

const createList = [
  {
    name: 'polyExt',
    typeList: [
      {
        name: '',
        id: 'polyExtConfirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'polyExtCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'polyExtConfirmBtn'
          }
        ]
      },
      {
        name: '多边形',
        id: 'polyExtPolygon',
        options: [
          {
            val: '绘制模式',
            type: 'select',
            optionsList: [
              { val: '自由绘制' },
              { val: '环形' },
              { val: '正方形' },
              { val: '矩形' },
              { val: '圆角矩形' },
              { val: '无名指' }
            ]
          },
          {
            val: '自相交',
            type: 'checkbox'
          },
          {
            val: '特性大小比例',
            type: 'input'
          },
          {
            val: '径向切片',
            type: 'input'
          },
          {
            val: '距离',
            type: 'input'
          },
          {
            val: '显示网格小工具',
            type: 'checkbox'
          }
        ]
      },
      {
        name: '挤压',
        id: 'polyExtExtrusion',
        options: [
          {
            val: '挤压模式',
            type: 'select',
            optionsList: [{ val: '扁平' }, { val: '固定' }, { val: '交互式' }]
          }
        ]
      },
      {
        name: '对齐',
        id: 'polyExtAligned',
        options: [
          {
            val: '启用对齐',
            type: 'checkbox'
          },
          {
            val: '对齐到顶点',
            type: 'checkbox'
          },
          {
            val: '对齐到边缘',
            type: 'checkbox'
          },
          {
            val: '对齐到轴',
            type: 'checkbox'
          },
          {
            val: '对齐到长度',
            type: 'checkbox'
          },
          {
            val: '对齐到表面',
            type: 'checkbox'
          },
          {
            val: '挤压模式',
            type: 'select',
            optionsList: [{ val: '扁平' }, { val: '固定' }, { val: '交互式' }]
          }
        ]
      },
      {
        name: '材质',
        id: 'polyExtTexture',
        options: [
          {
            val: '材质',
            type: 'img'
          }
        ]
      }
    ]
  },
  {
    name: 'pathExt',
    typeList: [
      {
        name: '',
        id: 'pathExtConfirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'pathExtCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'pathExtConfirmBtn'
          }
        ]
      },
      {
        name: '路径',
        id: 'pathExtPath',
        options: [
          { val: '宽度模式', type: 'select', optionsList: [{ val: '交互式' }, { val: '固定' }] },
          { val: '宽度', type: 'input' },
          { val: '圆角', type: 'checkbox' },
          { val: '半径模式', type: 'select', optionsList: [{ val: '交互式' }, { val: '固定' }] },
          { val: '角半径', type: 'input' },
          { val: '径向切片', type: 'input' },
          { val: '单一多边形组', type: 'checkbox' }
        ]
      },
      {
        name: '挤压',
        id: 'pathExtExtrusion',
        options: [
          {
            val: '挤压模式',
            type: 'select',
            optionsList: [{ val: '扁平' }, { val: '固定' }, { val: '交互式' }]
          },
          { val: '挤压高度', type: 'input' },
          { val: '斜坡开始比率', type: 'input' }
        ]
      },
      { name: '材质', id: 'pathExtTexture', options: [{ val: '材质名称', type: 'img' }] }
    ]
  },
  {
    name: '路径定义',
    typeList: [
      {
        name: '',
        id: 'pathExtConfirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'pathRevCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'pathRevConfirmBtn'
          }
        ]
      },
      {
        name: '旋转',
        id: 'pathExtRotate',
        options: [
          {
            val: '输出模式',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '体积' }, { val: '动态网格体' }]
          },
          { val: '角度', type: 'input' },
          { val: '偏移度数', type: 'input' },
          { val: '步最大角度', type: 'input' },
          { val: '显示步骤', type: 'checkbox' },
          { val: '步', type: 'input' },
          { val: '高度偏移', type: 'input' },
          { val: '倒回', type: 'checkbox' },
          { val: '翻转网格体', type: 'checkbox' },
          { val: '锐利法线', type: 'checkbox' },
          { val: '锐利法线阈值', type: 'input' }
        ]
      },
      {
        name: '高级',
        id: 'pathExtAdvanced',
        options: [
          { val: '到轴的接近路径', type: 'checkbox' },
          { val: '到轴的接近路径', type: 'checkbox' },
          {
            val: 'PolyGroup模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每个旋转步骤' }, { val: '每条路径段' }]
          },
          {
            val: '四形边分割模式',
            type: 'select',
            optionsList: [{ val: '紧凑' }, { val: '统一' }]
          },
          {
            val: '上限填充模式',
            type: 'select',
            optionsList: [{ val: '德劳内' }]
          }
        ]
      },
      {
        name: '绘制平面',
        id: 'pathExtPlane',
        options: [
          { val: '原点', type: 'coord' },
          { val: '朝向', type: 'coord' }
        ]
      },
      { name: '对齐', id: 'pathExtSnapping', options: [{ val: '启用对齐', type: 'checkbox' }] },
      { name: '材质', id: 'pathExtTexture', options: [{ val: '材质名称', type: 'img' }] }
    ]
  },
  {
    name: 'bdryRev',
    typeList: [
      {
        name: '',
        id: 'bdryRevConfirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'bdryRevCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'bdryRevConfirmBtn'
          }
        ]
      },
      {
        name: '旋转',
        id: 'bdryRevRotate',
        options: [
          {
            val: '输出模式',
            type: 'select',
            optionsList: [{ val: '静态网格体' }, { val: '体积' }, { val: '动态网格体' }]
          },
          { val: '角度', type: 'input' },
          { val: '偏移度数', type: 'input' },
          { val: '步最大角度', type: 'input' },
          { val: '显示步骤', type: 'checkbox' },
          { val: '步', type: 'input' },
          { val: '高度偏移', type: 'input' },
          { val: '倒回', type: 'checkbox' },
          { val: '翻转网格体', type: 'checkbox' },
          { val: '锐利法线', type: 'checkbox' },
          { val: '锐利法线阈值', type: 'input' }
        ]
      },
      {
        name: '高级',
        id: 'bdryRevAdvanced',
        options: [
          { val: '到轴的接近路径', type: 'checkbox' },
          { val: '到轴的接近路径', type: 'checkbox' },
          {
            val: 'PolyGroup模式',
            type: 'select',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每个旋转步骤' }, { val: '每条路径段' }]
          },
          {
            val: '四形边分割模式',
            type: 'select',
            optionsList: [{ val: '紧凑' }, { val: '统一' }]
          },
          {
            val: '上限填充模式',
            type: 'select',
            optionsList: [{ val: '德劳内' }]
          }
        ]
      },
      {
        name: '绘制平面',
        id: 'bdryRevPlane',
        options: [
          { val: '原点', type: 'coord' },
          { val: '朝向', type: 'coord' }
        ]
      },
      { name: '对齐', id: 'pathExtSnapping', options: [{ val: '启用对齐', type: 'checkbox' }] },
      { name: '材质', id: 'pathExtTexture', options: [{ val: '材质名称', type: 'img' }] }
    ]
  },
  {
    name: 'pattern',
    typeList: [
      {
        name: '',
        id: 'patternConfirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'patternCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'patternConfirmBtn'
          }
        ]
      },
      {
        name: '形状',
        id: 'patternForm',
        options: [
          {
            val: '形状',
            type: 'select',
            optionsList: [{ val: '行' }, { val: '网格' }, { val: '环形' }]
          },
          {
            val: '方向',
            type: 'select',
            optionsList: [{ val: 'X轴' }, { val: 'Y轴' }, { val: 'Z轴' }]
          },
          {
            val: '隐藏源',
            type: 'checkbox'
          },
          {
            val: '种子',
            type: 'input'
          }
        ]
      },
      {
        name: '线性模式',
        id: 'patternLinearPattern',
        options: [
          {
            val: '间距模式',
            type: 'select',
            optionsList: [{ val: '按数量' }, { val: '步长' }, { val: '打包' }]
          },
          {
            val: '计数',
            type: 'input'
          },
          {
            val: '步长',
            type: 'input'
          },
          {
            val: '范围',
            type: 'input'
          },
          {
            val: '居中',
            type: 'checkbox'
          }
        ]
      },
      {
        name: '旋转',
        id: 'patternRotate',
        options: [
          { val: '开始旋转', type: 'coord' },
          { val: '结束旋转', type: 'coord' }
        ]
      },
      {
        name: '平移',
        id: 'patternTranslation',
        options: [
          { val: '开始平移', type: 'coord' },
          { val: '结束平移', type: 'coord' }
        ]
      },
      {
        name: '缩放',
        id: 'patternZoom',
        options: [
          { val: '统一', type: 'checkbox' },
          { val: '开始缩放', type: 'coord' },
          { val: '结束缩放', type: 'coord' }
        ]
      },
      { name: '材质', id: 'patternImg', options: [{ val: '材质名称', type: 'img' }] }
    ]
  },

  {
    name: 'mashup',
    typeList: [
      {
        name: '',
        id: 'mashupConfirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'mashupCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'mashupConfirmBtn'
          }
        ]
      },
      { name: '输出对象', id: 'mashupObj', options: [{ val: '名称', type: 'input' }] },
      {
        name: '输出类型',
        id: 'mashupType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: 'Static Mesh' }, { val: 'Volume' }, { val: 'Dynamic Mesh' }, { val: 'From Input' }]
          }
        ]
      },
      {
        name: 'On Tool Accept',
        id: 'mashuptool',
        options: [
          {
            val: '处理输入',
            type: 'select',
            optionsList: [{ val: '删除输入' }, { val: '隐藏输入' }, { val: '保持输入' }]
          }
        ]
      }
    ]
  },
  {
    name: '附加',
    typeList: [
      {
        name: '',
        id: 'subjoinConfirm',
        options: [
          {
            val: '取消',
            type: 'confirmButton',
            class: 'cancelButton',
            id: 'subjoinCancelBtn'
          },
          {
            val: '确认',
            type: 'confirmButton',
            class: 'confirmButton',
            id: 'subjoinConfirmBtn'
          }
        ]
      },
      {
        name: '输出对象',
        id: 'subjoinObj',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: '新对象' }]
          },
          { val: '名称', type: 'input' }
        ]
      },
      {
        name: '输出类型',
        id: 'subjoinType',
        options: [
          {
            val: '输出类型',
            type: 'select',
            optionsList: [{ val: 'Static Mesh' }, { val: 'Volume' }, { val: 'Dynamic Mesh' }, { val: 'From Input' }]
          }
        ]
      },
      {
        name: 'On Tool Accept',
        id: 'subjointool',
        options: [
          {
            val: '处理输入',
            type: 'select',
            optionsList: [{ val: '删除输入' }, { val: '隐藏输入' }, { val: '保持输入' }]
          }
        ]
      }
    ]
  }
]

const outlineList = [
  {
    name: '变换',
    id: 'otConversion',
    type: 'universal',
    options: [
      {
        val: '位置',
        type: 'changeCoord',
        icon: '#icon-shangsuo',
        checkIf: 'ture',
        optionsList: [{ val: '相对位置' }, { val: '绝对位置' }]
      },
      {
        val: '位置',
        type: 'changeCoord',
        icon: '#icon-shangsuo',
        checkIf: 'ture',
        optionsList: [{ val: '相对位置' }, { val: '绝对位置' }]
      },
      {
        val: '位置',
        type: 'changeCoord',
        icon: '#icon-shangsuo',
        checkIf: 'ture',
        optionsList: [{ val: '相对位置' }, { val: '绝对位置' }]
      },
      {
        val: '移动性',
        type: 'withdrawButton',
        optionsList: [{ val: '静态' }, { val: '固态' }, { val: '可移动' }]
      }
    ]
  },
  {
    name: '材质',
    id: 'otTexture',
    type: 'universal',
    options: [{ val: '材质名称', type: 'img' }]
  },
  {
    name: '静态网格体',
    id: 'otMeshes',
    type: 'universal',
    options: [{ val: '材质名称', type: 'img' }]
  },
  {
    name: 'Actor',
    id: 'otActor',
    type: 'actor',
    options: [
      {
        val: '转换Actor',
        type: 'select',
        optionsList: [{ val: '选择一种类型' }]
      },
      { val: '可被伤害', type: 'checkbox' },
      { val: '初始生命周期', type: 'input' },
      {
        val: '生成碰撞处理方法',
        type: 'select',
        optionsList: [
          { val: '默认' },
          { val: '固定生成，忽视碰撞' },
          { val: '尝试调整位置，但固定生成' },
          { val: '尝试调整位置，如仍然碰撞则不生成' },
          { val: '不生成' }
        ]
      }
    ]
  },
  {
    name: '高级',
    id: 'actorAdvanced',
    type: 'actor',
    options: [
      { val: '静态网格体复制移动', type: 'checkbox' },
      { val: '查看目标是寻找摄像机组件', type: 'checkbox' },
      { val: '忽略原点偏移', type: 'checkbox' },
      { val: '可存在于集群中', type: 'checkbox' },
      { val: '图层', type: 'addElement' },
      { val: '标签', type: 'addElement' }
    ]
  },
  {
    name: '枢轴偏移',
    id: 'actorPivotShift',
    type: 'actor',
    options: [{ val: '', type: 'withdrawCoord' }]
  }
]

export default {
  modelingData,
  shapeSettingList,
  modelOperationSettingList,
  modelSettingList,
  triModelList,
  outlineList,
  createList
}
