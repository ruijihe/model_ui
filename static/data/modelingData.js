/*
 * @Author: Ray 18565608435@163.com
 * @Date: 2023-02-01 15:09:00
 * @LastEditors: Ray 18565608435@163.com
 * @LastEditTime: 2023-03-15 11:12:16
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
    name: 'Shapes',
    list: [
      {
        label: 'Box',
        tooltip: 'Create new Box objects',
        icon: '#icon-juxing-3',
        iconclass: 'icon',
        class: 'shape',
        id: 'rectangle'
      },
      {
        label: 'Cyl',
        tooltip: 'Create new Cyl objects',
        icon: '#icon-yuanzhu',
        iconclass: 'icon',
        class: 'shape',
        id: 'cylinder'
      },
      {
        label: 'Sphere',
        tooltip: 'Create new Sphere objects',
        icon: '#icon-qiuxing',
        iconclass: 'icon',
        class: 'shape',
        id: 'sphere'
      },
      {
        label: 'Cone',
        tooltip: 'Create new Cone objects',
        icon: '#icon-zhuixing',
        iconclass: 'icon',
        class: 'shape',
        id: 'taper'
      },
      {
        label: 'Torus',
        tooltip: 'Create new Torus objects',
        icon: '#icon-huanxing',
        iconclass: 'icon-b',
        class: 'shape',
        id: 'annular'
      },
      {
        label: 'Arrow',
        tooltip: 'Create new Arrow objects',
        icon: '#icon-jiantou-1',
        iconclass: 'icon',
        class: 'shape',
        id: 'arrows'
      },
      {
        label: 'Rect',
        tooltip: 'Create new Rect objects',
        icon: '#icon-fangpian',
        iconclass: 'icon-b',
        class: 'shape',
        id: 'fangpian'
      },
      {
        label: 'Disc',
        tooltip: 'Create new Disc objects',
        icon: '#icon-shepian',
        iconclass: 'icon-b',
        class: 'shape',
        id: 'disc'
      },
      {
        label: 'Stairs',
        tooltip: 'Create new Stairs objects',
        icon: '#icon-tixing-1',
        iconclass: 'icon',
        class: 'shape',
        id: 'trapezoid'
      }
    ]
  },
  {
    name: 'Create',
    list: [
      {
        label: 'PolyExt',
        tooltip: 'Draw and extrude polygons to create new objects',
        icon: '#icon-PolyExt',
        iconclass: 'icon',
        class: 'create',
        id: 'PolyExt'
      },
      {
        label: 'PathExt',
        tooltip: 'Draw and extrude PolyPaths to create new objects',
        icon: '#icon-PathExt',
        iconclass: 'icon',
        class: 'create',
        id: 'PathExt'
      },
      {
        label: 'PathRev',
        tooltip: 'Draw and revolve PolyPaths to create new objects',
        icon: '#icon-luojingxiuding',
        iconclass: 'icon-s',
        class: 'create',
        id: 'pathDefinition'
      },
      {
        label: 'BdryRev',
        tooltip: 'Revolve mesh boundary loops to create new objects',
        icon: '#icon-BdryRev',
        iconclass: 'icon-s',
        class: 'create',
        id: 'BdryRev'
      },
      {
        label: 'Pattern',
        tooltip: 'Create patterns of meshes',
        icon: '#icon-Pattern',
        iconclass: 'icon',
        class: 'create',
        id: 'Pattern'
      },
      {
        label: 'MshDup',
        tooltip: 'Duplicate single meshes to create new objects',
        icon: '#icon-Mashup',
        iconclass: 'icon',
        class: 'create',
        id: 'Mashup'
      },
      {
        label: 'MshMrg',
        tooltip: 'Merge multiple meshes to create new objects',
        icon: '#icon-bujia',
        iconclass: 'icon-b',
        class: 'create',
        id: 'subjoin'
      }
    ]
  },
  {
    name: 'PolyModel',
    list: [
      {
        label: 'CubeGr',
        tooltip: 'create block out meshes using a repositionable grid',
        icon: '#icon-jichumuxing-3',
        iconclass: 'icon-b',
        class: 'model',
        id: 'cube'
      },
      {
        label: 'PolyEd',
        tooltip: 'Edit meshes via PolyGroups',
        icon: '#icon-bianji-2',
        iconclass: 'icon',
        class: 'model',
        id: 'edit'
      },
      {
        label: 'PolyDef',
        tooltip: 'Deform meshes via PolyGroups',
        icon: '#icon-bianxing',
        iconclass: 'icon',
        class: 'model',
        id: 'transformation'
      },
      {
        label: 'MshBool',
        tooltip: 'Apply Boolean operations to mesh pairs',
        icon: '#icon-wangluobuer',
        iconclass: 'icon-b',
        class: 'model',
        id: 'mshBool'
      },
      {
        label: 'MshCut',
        tooltip: 'split one mesh into parts using a second mesh',
        icon: '#icon-buerfenge',
        iconclass: 'icon-b',
        class: 'model',
        id: 'mshCut'
      },
      {
        label: 'SubDiv',
        tooltip: 'Subdivide mesh via PolyGroups or triangles',
        icon: '#icon-xifen',
        iconclass: 'icon',
        class: 'model',
        id: 'subDiv'
      }
    ]
  },
  {
    name: 'TriModel',
    list: [
      {
        label: 'TriSel',
        tooltip: 'Select and edit mesh triangles',
        icon: '#icon-TriSel',
        iconclass: 'icon',
        class: 'triModel',
        id: 'TriSel'
      },
      {
        label: 'TriED',
        tooltip: 'Edit mesh via triangles',
        icon: '#icon-sanjiaoxingbianji',
        iconclass: 'icon',
        class: 'triModel',
        id: 'TriED'
      },
      {
        label: 'HFill',
        tooltip: 'Fill holes in mesh',
        icon: '#icon-chenbutong',
        iconclass: 'icon',
        class: 'triModel',
        id: 'HFill'
      },
      {
        label: 'Mirror',
        tooltip: 'Mirror selected meshes',
        icon: '#icon-jingxiang',
        iconclass: 'icon',
        class: 'triModel',
        id: 'Mirror'
      },
      {
        label: 'PinCut',
        tooltip: 'cut selected meshes with plane',
        icon: '#icon-pingmianjianqi',
        iconclass: 'icon',
        class: 'triModel',
        id: 'PinCut'
      },
      {
        label: 'PolyCut',
        tooltip: 'cut mesh with extruded polygon',
        icon: '#icon-PolyCut',
        iconclass: 'icon',
        class: 'triModel',
        id: 'PolyCut'
      },
      {
        label: 'Trim',
        tooltip: 'Trim/cut selected mesh with second mesh',
        icon: '#icon-Trim',
        iconclass: 'icon',
        class: 'triModel',
        id: 'Trim'
      }
    ]
  },
  {
    name: 'Deform',
    list: [
      {
        label: 'VSclpt',
        tooltip: 'vertex sculpting',
        icon: '#icon-VSclpt',
        iconclass: 'icon',
        class: 'deForm',
        id: ''
      },
      {
        label: 'DSclpt',
        tooltip: 'Dynamic mesh sculpting',
        icon: '#icon-DSclpt',
        iconclass: 'icon',
        class: 'deForm',
        id: 'DSclpt'
      },
      {
        label: 'Smooth',
        tooltip: 'Smooth mesh surface',
        icon: '#icon-pinghua',
        iconclass: 'icon',
        class: 'deForm',
        id: 'Smooth'
      },
      {
        label: 'Offset',
        tooltip: 'offset mesh surface',
        icon: '#icon-offsef',
        iconclass: 'icon',
        class: 'deForm',
        id: 'Offset'
      },
      {
        label: 'Warp',
        tooltip: 'Reshape mesh using space deformers',
        icon: '#icon-zhouqu',
        iconclass: 'icon',
        class: 'deForm',
        id: 'Warp'
      },
      {
        label: 'Lattice',
        tooltip: 'Deform mesh with 3D lattice/grid',
        icon: '#icon-dianzhenbianxing',
        iconclass: 'icon',
        class: 'deForm',
        id: 'Lattice'
      },
      {
        label: 'Displce',
        tooltip: 'Displace mesh surface with optional subdivision',
        icon: '#icon-zhihuan',
        iconclass: 'icon',
        class: 'deForm',
        id: 'Displce'
      }
    ]
  },
  {
    name: 'Transform',
    list: [
      {
        label: 'XForm',
        tooltip: 'Transform selected meshes',
        icon: '#icon-bianhuan',
        iconclass: 'icon',
        class: 'transForm',
        id: 'XForm'
      },
      {
        label: 'Align',
        tooltip: 'Align objects',
        icon: '#icon-duiqi-3',
        iconclass: 'icon',
        class: 'transForm',
        id: 'Align'
      },
      {
        label: 'Pivot',
        tooltip: 'Edit mesh pivots',
        icon: '#icon-bianjishuzhoudian',
        iconclass: 'icon',
        class: 'transForm',
        id: 'Pivot'
      },
      {
        label: 'PivotAct',
        tooltip: 'Add actor to act as a pivot for child components',
        icon: '#icon-tianjiashuzhoudian',
        iconclass: 'icon',
        class: 'transForm',
        id: 'PivotAct'
      },
      {
        label: 'BakeRS',
        tooltip: 'Bake rotation and scale into mesh asset',
        icon: '#icon-hongbeibianhuan',
        iconclass: 'icon',
        class: 'transForm',
        id: 'BakeRS'
      },
      {
        label: 'Transfer',
        tooltip: 'Transfer meshes',
        icon: '#icon-zhuanyi',
        iconclass: 'icon',
        class: 'transForm',
        id: 'Transfer'
      },
      {
        label: 'Convert',
        tooltip: 'Convert meshes',
        icon: '#icon-zhuanhuan',
        iconclass: 'icon',
        class: 'transForm',
        id: 'Convert'
      },
      {
        label: 'Split',
        tooltip: 'split meshes',
        icon: '#icon-fenge',
        iconclass: 'icon',
        class: 'transForm',
        id: 'Split'
      }
    ]
  },
  {
    name: 'MeshOps',
    list: [
      {
        label: 'Simplfy',
        tooltip: 'Simplify mesh',
        icon: '#icon-Simplfy',
        iconclass: 'icon',
        class: 'MeshOps',
        id: 'Simplfy'
      },
      {
        label: 'Remesh',
        tooltip: 'Re-triangulate mesh',
        icon: '#icon-Remesh',
        iconclass: 'icon',
        class: 'MeshOps',
        id: 'Remesh'
      },
      {
        label: 'Weld',
        tooltip: 'Weld overlapping mesh edges',
        icon: '#icon-Weld',
        iconclass: 'icon',
        class: 'MeshOps',
        id: 'Weld'
      },
      {
        label: 'Jacket',
        tooltip: 'Remove hidden triangles from selected meshes',
        icon: '#icon-Jacket',
        iconclass: 'icon',
        class: 'MeshOps',
        id: 'Jacket'
      },
      {
        label: 'Merge',
        tooltip: 'Self-union selected meshes to resolve self-intersections',
        icon: '#icon-Merge',
        iconclass: 'icon',
        class: 'MeshOps',
        id: 'Merge'
      },
      {
        label: 'Project',
        tooltip: 'Map/re-mesh onto target mesh (second selection)',
        icon: '#icon-Project',
        iconclass: 'icon',
        class: 'MeshOps',
        id: 'Project'
      }
    ]
  },
  {
    name: 'VoxOps',
    list: [
      {
        label: 'VoxWrap',
        tooltip: 'Wrap selected meshes using voxels',
        icon: '#icon-VoxWrap',
        iconclass: 'icon',
        class: 'VoxOps',
        id: 'VoxWrap'
      },
      {
        label: 'VoxBlnd',
        tooltip: 'Blend selected meshes using voxels',
        icon: '#icon-VoxBlnd',
        iconclass: 'icon',
        class: 'VoxOps',
        id: 'VoxBlnd'
      },
      {
        label: 'VoxMrph',
        tooltip: 'Offset/inset selected meshes using voxels',
        icon: '#icon-VoxMrph',
        iconclass: 'icon',
        class: 'VoxOps',
        id: 'VoxMrph'
      },
      {
        label: 'VoxBool',
        tooltip: 'Boolean selected meshes using voxels',
        icon: '#icon-VoxBool',
        iconclass: 'icon',
        class: 'VoxOps',
        id: 'VoxBool'
      },
      {
        label: 'VoxMrg',
        tooltip: 'Merge selected meshes using voxels',
        icon: '#icon-VoxMrg',
        iconclass: 'icon',
        class: 'VoxOps',
        id: 'VoxMrg'
      }
    ]
  },
  {
    name: 'Attributes',
    list: [
      {
        label: 'Inspct',
        tooltip: 'lnspect mesh attributes',
        icon: '#icon-Inspct',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'Inspct'
      },
      {
        label: 'Nrmls',
        tooltip: 'Update mesh normals',
        icon: '#icon-Nrmls',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'Nrmls'
      },
      {
        label: 'Tngnts',
        tooltip: 'update mesh tangents',
        icon: '#icon-Tngnts',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'Tngnts'
      },
      {
        label: 'AttrEd',
        tooltip: 'Edit/configure mesh attributes',
        icon: '#icon-AttrEd',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'AttrEd'
      },
      {
        label: 'GrpGen',
        tooltip: 'Generate new PolyGroups',
        icon: '#icon-GrpGen',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'GrpGen'
      },
      {
        label: 'GrpPnt',
        tooltip: 'Paint new PolyGroups',
        icon: '#icon-GrpPnt',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'GrpPnt'
      },
      {
        label: 'MapPnt',
        tooltip: 'Paint attribute maps',
        icon: '#icon-MapPnt',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'MapPnt'
      },
      {
        label: 'MatEd',
        tooltip: 'Assign materials to selected triangles',
        icon: '#icon-MatEd',
        iconclass: 'icon',
        class: 'Attributes',
        id: 'MatEd'
      }
    ]
  },
  {
    name: 'UVs',
    list: [
      {
        label: 'AutoUV',
        tooltip: 'Automatically unwrap and pack Uvs for mesh',
        icon: '#icon-AutoUV',
        iconclass: 'icon',
        class: 'UVs',
        id: 'AutoUV'
      },
      {
        label: 'Unwrap',
        tooltip: 'Perform uv unwrapping for mesh',
        icon: '#icon-Unwrap',
        iconclass: 'icon',
        class: 'UVs',
        id: 'Unwrap'
      },
      {
        label: 'Project',
        tooltip: 'set Uvs from projection',
        icon: '#icon-Project_1',
        iconclass: 'icon',
        class: 'UVs',
        id: 'Project'
      },
      {
        label: 'SeamEd',
        tooltip: 'Add UV seams to mesh',
        icon: '#icon-SeamEd',
        iconclass: 'icon',
        class: 'UVs',
        id: 'SeamEd'
      },
      {
        label: 'XFormUV',
        tooltip: 'Transform Uv islands in uv space',
        icon: '#icon-XFormUV',
        iconclass: 'icon',
        class: 'UVs',
        id: 'XFormUV'
      },
      {
        label: 'Layout',
        tooltip: 'Transform and pack existing uvs',
        icon: '#icon-Layout',
        iconclass: 'icon',
        class: 'UVs',
        id: 'Layout'
      },
      {
        label: 'UVEditor',
        tooltip: '启动UV资产编辑器',
        icon: '#icon-UVEditor',
        iconclass: 'icon',
        class: 'UVs',
        id: 'UVEditor'
      }
    ]
  }
]

const shapeSettingList = [
  {
    name: '矩形',
    typeList: [
      {
        name: '矩形',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '圆柱',
    typeList: [
      {
        name: '圆柱',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '球形',
    typeList: [
      {
        name: '球形',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          },
          { val: '细分', type: 'input' },
          { val: '水平切片', type: 'input' },
          { val: '垂直切片', type: 'input' },
          { val: '多边形组模式', type: 'select', class: 's-c-b-box', optionsList: [{ val: '多面' }, { val: '每面' }] }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '锥形',
    typeList: [
      {
        name: '锥形',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '环形',
    typeList: [
      {
        name: '环形',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '箭头',
    typeList: [
      {
        name: '箭头',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '方片',
    typeList: [
      {
        name: '方片',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '矩形类型', type: 'select', class: 's-c-b-box', optionsList: [{ val: '矩形' }, { val: '圆盘' }] },

          { val: '宽度', type: 'input' },
          { val: '深度', type: 'input' },
          { val: '宽度细化', type: 'input' },
          { val: '深度细化', type: 'input' },
          { val: '角半径', type: 'input' },
          { val: '角切片', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '碟片',
    typeList: [
      {
        name: '碟片',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
            optionsList: [{ val: '静态网格体' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '形状',
        id: 'rectangleForm',
        options: [
          { val: '矩形类型', type: 'select', class: 's-c-b-box', optionsList: [{ val: '矩形' }, { val: '圆盘' }] },

          { val: '半径', type: 'input' },
          { val: '径向切片', type: 'input' },
          { val: '径向细分', type: 'input' },
          { val: '洞半径', type: 'input' },
          {
            val: '多边形组模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: '梯形',
    typeList: [
      {
        name: '梯形',
        id: 'confirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每四边形' }]
          }
        ]
      },
      {
        name: '定位',
        id: 'position',
        options: [
          { val: '目标表面', type: 'select', class: 's-c-b-box', optionsList: [{ val: '在场景上' }, { val: '底部' }] },

          {
            val: '枢轴点位置',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '在场景上' }, { val: '底部' }]
          },

          { val: '旋转', type: 'input' },
          { val: '对齐到法线', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '材质',
        id: 'texture',
        options: [
          { val: '材质名称', type: 'img' },
          { val: 'UV缩放', type: 'input' },
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  }
]

const modelSettingList = [
  {
    name: '挤出模型',
    typeList: [
      {
        name: '选项',
        id: 'cubeOptions',
        options: [
          { val: '网格框架原点', type: 'coord' },
          { val: '网格框架朝向', type: 'coord' },
          { val: '显示小工具', type: 'checkbox', class: 's-c-b-box' },
          { val: '网格幂', type: 'input' },
          { val: '当前块大小', type: 'input' },
          { val: '每块的步', type: 'input' },
          { val: '斜向对角', type: 'checkbox', class: 's-c-b-box' },
          { val: '高级', type: 'advanced' }
        ]
      },
      {
        name: '高级',
        id: 'advancedOne',
        options: [
          { val: '二次幂块大小', type: 'checkbox', class: 's-c-b-box' },
          { val: '块基础大小', type: 'input' },
          { val: '保持侧组', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '块选择',
        id: 'pieceOptions',
        options: [{ val: '命中无关几何体', type: 'checkbox', class: 's-c-b-box' }]
      },
      {
        name: '高级',
        id: 'advancedTwo',
        options: [
          { val: '命中网格地平面', type: 'checkbox', class: 's-c-b-box' },
          {
            val: '面选择模式',
            type: 'select',
            class: 's-c-b-box',
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
            class: 's-c-b-box',
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
          { val: '全局UV缩放', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' }
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
          {
            val: 'Extrude',
            tooltip: '通过移动和缝合挤压当前选定面的集。',
            icon: '#icon-jichu',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'OffSet',
            tooltip: '类似于挤压，但默认沿着顶点法线移动顶点，而非朝单一方向移动。',
            icon: '#icon-Offset_1',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Inset',
            tooltip: '嵌入当前选定面的集。在视口中点击以确认嵌入距离。',
            icon: '#icon-lnset',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'OutSet',
            tooltip: '外凸当前选定面的集。在视口中点击以确认外凸距离。',
            icon: '#icon-Outset',
            class: 'e-s-icon',
            type: 'button'
          },
          { val: '斜角', tooltip: '', icon: '#icon-xiejiao', class: 'e-s-icon', type: 'button' },
          { val: '合并', tooltip: '', icon: '#icon-hebing-1', class: 'e-s-icon', type: 'button' },
          { val: '面部切割', tooltip: '', icon: '#icon-mianbuqige', class: 'e-s-icon', type: 'button' },
          { val: '面部翻转', tooltip: '', icon: '#icon-mianbufanzhuan', class: 'icon-b', type: 'button' },
          { val: '重分三角', tooltip: '', icon: '#icon-tongfensanjiao', class: 'e-s-icon', type: 'button' },
          { val: '断开面部', tooltip: '', icon: '#icon-duankaimianbu', class: 'e-s-icon', type: 'button' }
        ]
      },
      {
        name: '形状编辑',
        id: 'shapeEditing',
        options: [
          { val: '插入边缘', tooltip: '', icon: '#icon-zharubianhuan1', class: 'e-s-icon', type: 'button' },
          { val: '插入边缘2', tooltip: '', icon: '#icon-zharubianyuan2', class: 'e-s-icon', type: 'button' },
          { val: '', icon: '', tooltip: '', class: 'e-s-icon', type: 'button' }
        ]
      },
      {
        name: '边缘编辑',
        id: 'edgeEditing',
        options: [
          { val: '焊接', tooltip: '', icon: '#icon-hanxie', class: 'e-s-icon', type: 'button' },
          { val: '伸直', tooltip: '', icon: '#icon-shenzhi', class: 'e-s-icon', type: 'button' },
          { val: '填充孔', tooltip: '', icon: '#icon-chenchongkong', class: 'e-s-icon', type: 'button' },
          { val: '斜角_1', tooltip: '', icon: '#icon-xiejiao_1', class: 'e-s-icon', type: 'button' },
          { val: '桥', tooltip: '', icon: '#icon-qiao', class: 'e-s-icon', type: 'button' }
        ]
      },
      {
        name: 'UV',
        id: 'UV',
        options: [{ val: '平面投影', tooltip: '', icon: '#icon-pingmiantouying', class: 'e-s-icon', type: 'button' }]
      },
      {
        name: '选择操作',
        id: 'selectingOperation',
        options: [
          { val: '反相选区', tooltip: '', icon: '#icon-fanxiangxuanqu', class: 'e-s-icon', type: 'button' },
          { val: '全选', tooltip: '', icon: '#icon-quanxuan', class: 'e-s-icon', type: 'button' }
        ]
      },
      {
        name: '选项过滤器',
        id: 'optionFilter',
        options: [
          { val: '选择点', tooltip: '', icon: '#icon-xuanzhaidian', class: 'e-s-icon', type: 'button' },
          { val: '选择线', tooltip: '', icon: '#icon-xuanzhaixian', class: 'e-s-icon', type: 'button' },
          { val: '选择面', tooltip: '', icon: '#icon-xuanzhaimian', class: 'e-s-icon', type: 'button' },
          { val: '插入边缘1', tooltip: '', icon: '#icon-zharubianhuan1', class: 'e-s-icon', type: 'button' },
          { val: '插入边缘2', tooltip: '', icon: '#icon-zharubianyuan2', class: 'e-s-icon', type: 'button' }
        ]
      },
      {
        name: '正交视口行为',
        id: 'otViewport',
        options: [
          { val: '首选投影元素', type: 'checkbox', class: 's-c-b-box' },
          { val: '选择下射线', type: 'checkbox', class: 's-c-b-box' },
          { val: '忽略遮挡', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '高级',
        id: 'edAdvanced',
        options: [
          { val: '命中返回面', type: 'checkbox', class: 's-c-b-box' },
          { val: '启动边框', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '选项',
        id: 'edSelect',
        options: [
          { val: '显示可选择角落', type: 'checkbox', class: 's-c-b-box' },
          { val: '小工具可见', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '小工具',
        id: 'edTool',
        options: [
          { val: '本地帧模式', type: 'select', class: 's-c-b-box', optionsList: [{ val: '来自几何体' }] },

          { val: '锁定旋转', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '拓扑选项',
        id: 'edTopology',
        options: [
          { val: '再生额外的角落', icon: '#icon-zaishengewaidijiaola', class: 'e-s-icon', type: 'button' },
          { val: '添加额外的角', type: 'checkbox', class: 's-c-b-box' },
          { val: '额外角度度数', type: 'input' }
        ]
      }
    ]
  },
  {
    name: '变形',
    typeList: [
      {
        name: '选项',
        id: 'm-t-s-one',
        options: [
          {
            val: '变形',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '平滑' }, { val: '线性' }]
          },
          {
            val: '变换',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '平移' }, { val: '旋转' }]
          }
        ]
      },
      {
        name: '选项',
        id: 'm-t-s-two',
        options: [
          { val: '选择面', type: 'checkbox', class: '' },
          { val: '选择边', type: 'checkbox', class: '' },
          { val: '选择顶点', type: 'checkbox', class: '' }
        ]
      },
      {
        name: '选项',
        id: 'm-t-s-there',
        options: [{ val: '显示线框', type: 'checkbox', class: '' }]
      }
    ]
  },
  {
    name: '网格布尔',
    typeList: [
      {
        name: '布尔',
        id: 'm-b-one',
        options: [
          {
            val: '操作',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '差异A-B' }, { val: '差异B-A' }, { val: '相交' }, { val: '联合' }]
          }
        ]
      },
      {
        name: '高级',
        id: 'm-b-two',
        options: [
          { val: '尝试修复洞', type: 'checkbox', class: '' },
          { val: '尝试折叠边缘', type: 'checkbox', class: '' },
          { val: '卷绕阈值', type: 'input', class: '' }
        ]
      },
      {
        name: '显示',
        id: 'm-b-there',
        options: [
          { val: '显示新边界', type: 'checkbox', class: '' },
          { val: '透明度减去网格体', type: 'checkbox', class: '' },
          { val: '不透明减网格体', type: 'input', class: '' },
          { val: '颜色减网格体', type: 'coord', class: '' }
        ]
      },
      {
        name: '材质',
        id: 'm-b-four',
        options: [{ val: '使用首个网格体材质', type: 'checkbox', class: '' }]
      },
      {
        name: '变换',
        id: 'm-b-five',
        options: [{ val: '显示小工具', type: 'checkbox', class: '' }]
      },
      {
        name: '输出类型',
        id: 'm-b-six',
        options: [
          {
            val: '输出类型',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: 'Static Mesh' }, { val: 'Volume' }, { val: 'Dynamic Mesh' }, { val: 'From Input' }]
          }
        ]
      },
      {
        name: '输出对象',
        id: 'm-b-seven',
        options: [
          {
            val: '写出至',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '新对象' }, { val: '首次输入Object' }, { val: '最后输入Object' }]
          },
          { val: '名称', type: 'input', class: '' }
        ]
      },
      {
        name: '处理输入',
        id: 'm-b-eight',
        options: [{ val: '处理输入', type: 'input', class: '' }]
      }
    ]
  },
  {
    name: '布尔分割',
    typeList: [
      {
        name: '布尔',
        id: 'm-m-c-one',
        options: [
          { val: '尝试修复洞', type: 'checkbox', class: '' },
          { val: '尝试折叠边缘', type: 'checkbox', class: '' }
        ]
      },
      {
        name: '高级',
        id: 'm-m-c-two',
        options: [{ val: '卷绕阈值', type: 'input', class: '' }]
      },
      {
        name: '显示',
        id: 'm-m-c-there',
        options: [{ val: '显示新边界', type: 'checkbox', class: '' }]
      },
      {
        name: '材质',
        id: 'm-m-c-four',
        options: [{ val: '使用首个网格体材质', type: 'checkbox', class: '' }]
      },
      {
        name: '变换',
        id: 'm-m-c-six',
        options: [{ val: '显示小工具', type: 'checkbox', class: '' }]
      }
    ]
  },
  {
    name: '细分',
    typeList: [
      {
        name: '设置',
        id: 'm-s-d-one',
        options: [
          { val: '细分关卡', type: 'input', class: '' },
          {
            val: '细分模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '循环' }, { val: '双线性' }, { val: '卡特穆尔.克拉克细分算法' }]
          },
          {
            val: '法线计算方法',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '已生成' }, { val: '已插值' }, { val: '无' }]
          },
          {
            val: 'UV计算方法',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '已插值' }, { val: '无' }]
          },
          { val: '新多边形行组', type: 'checkbox', class: '' },
          { val: '渲染组', type: 'checkbox', class: '' },
          { val: '渲染笼', type: 'checkbox', class: '' }
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
        id: 't-s-selectEditing',
        options: [
          { val: '清除', icon: '#icon-qingshu', class: 'e-s-icon', type: 'button', tooltip: '清除激活的三角形选择' },
          {
            val: '全选',
            icon: '#icon-ziyaocaoxing-quanxuan',
            class: 'e-s-icon',
            type: 'button',
            tooltip: '选择网格体中的所有三角形'
          },
          { val: '反转', icon: '#icon-fanzhuan-3', class: 'e-s-icon', type: 'button', tooltip: '反转激活三角形选择' },
          {
            val: '增加',
            icon: '#icon-cengjia-1',
            class: 'e-s-icon',
            type: 'button',
            tooltip: '增加激活三角形选择，以包括接触选择边界上顶点的所有三角形'
          },
          {
            val: '移除',
            icon: '#icon-yishu',
            class: 'e-s-icon',
            type: 'button',
            tooltip: '移除接触到选择边界上顶点的所有三角形，以缩小激活三角形选择'
          },
          {
            val: '全部增加',
            icon: '#icon-quanbucengjia',
            class: 'e-s-icon',
            type: 'button',
            tooltip: '增加激活选择以包含通过共享边连接的所有三角形（即泛填充)'
          },
          {
            val: '全部连接',
            icon: '#icon-quanbulianxie',
            class: 'e-s-icon',
            type: 'button',
            tooltip: '按三角形数量选择最大的连接网格体组件'
          },
          {
            val: '区域连接',
            icon: '#icon-quyulianxie',
            class: 'e-s-icon',
            type: 'button',
            tooltip: '按网格体区域选择最大的连接网格体组件'
          },
          { val: '优化', icon: '#icon-youhua', class: 'e-s-icon', type: 'button', tooltip: '优化选择边界' }
        ]
      },
      {
        name: '笔刷',
        id: 't-s-brush',
        options: [
          {
            val: '尺寸',
            type: 'input'
          }
        ]
      },
      {
        name: '高级',
        id: 't-s-advanced',
        options: [
          { val: '指定半径', type: 'checkbox', class: 's-c-b-box' },
          { val: '半径', type: 'input' }
        ]
      },
      {
        name: '选项',
        id: 't-s-option',
        options: [
          {
            val: '选择模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [
              { val: '笔刷' },
              { val: '体积笔刷' },
              { val: '角度过滤' },
              { val: '可见' },
              { val: '所有已连接项' },
              { val: '分组中所有项' },
              { val: '按材质' },
              { val: '按UV岛状区' },
              { val: '角度内中所有项' }
            ]
          },
          { val: '角度公差', type: 'input' },
          { val: '命中返回面', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示点', type: 'checkbox', class: 's-c-b-box' },
          {
            val: '面颜色模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '无' }, { val: '按分组' }, { val: '按材质ID' }, { val: '按UV岛状区' }]
          }
        ]
      },
      {
        name: 'PolyGroup层',
        id: 't-s-polyGroup',
        options: [
          {
            val: '激活',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: 'Default' }]
          }
        ]
      },
      {
        name: '网格体编辑',
        id: 't-s-gridEditing',
        options: [
          {
            val: 'Delete',
            tooltip: '清除激活的三角形选择',
            icon: '#icon-shanshufaxian',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Disconnect',
            tooltip: '断开选定三角形与其相邻项的连接，沿选择边界创建网格体边界',
            icon: '#icon-duankai',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Flip Normals',
            tooltip: '翻转选定三角形的法线。这将在选择边界创建硬法线。',
            icon: '#icon-fanzhuanfaxian',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Create Polygroup',
            tooltip: '为选定三角形指定一个新的唯一多边形组索引',
            icon: '#icon-chuangjianduozu',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Separate',
            tooltip: '从激活网格体object删除选定三角形,并新建一个包含这些三角形的网格体Object',
            icon: '#icon-fenkai',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Duplicateler',
            tooltip: '新建一个网格体Object,包含选定的三角形',
            icon: '#icon-tongfu',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Smooth Border',
            tooltip: '平滑选择边界',
            icon: '#icon-pinghuabiankuang',
            class: 'icon-s',
            type: 'button'
          }
        ]
      },
      {
        name: '网格体元素可视化',
        id: 't-s-gridVisual',
        options: [
          { val: '可见', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示边框', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示UV接缝', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示法线接缝', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示颜色接缝', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '高级',
        id: 't-s-twoAdvanced',
        options: [
          { val: '厚度缩放', type: 'input' },
          {
            val: '线框颜色',
            type: 'colorModule',
            id: 't-m-wireFrameColor',
            inputList: [
              { val: 'R', num: '128', inputId: 't-m-r-wireFrameInput' },
              { val: 'G', num: '128', inputId: 't-m-g-wireFrameInput' },
              { val: 'B', num: '128', inputId: 't-m-b-wireFrameInput' },
              { val: 'A', num: '255', inputId: 't-m-a-wireFrameInput' }
            ]
          },
          {
            val: '边界边缘颜色',
            type: 'colorModule',
            id: 't-m-boundaryColor',
            inputList: [
              { val: 'R', num: '245' },
              { val: 'G', num: '15' },
              { val: 'B', num: '15' },
              { val: 'A', num: '1' }
            ]
          },
          {
            val: 'UV接缝颜色',
            type: 'colorModule',
            id: 't-m-uvColor',
            inputList: [
              { val: 'R', num: '240' },
              { val: 'G', num: '160' },
              { val: 'B', num: '15' },
              { val: 'A', num: '1' }
            ]
          },
          {
            val: '法线接缝颜色',
            type: 'colorModule',
            id: 't-m-normalColor',
            inputList: [
              { val: 'R', num: '128' },
              { val: 'G', num: '128' },
              { val: 'B', num: '240' },
              { val: 'A', num: '1' }
            ]
          }
        ]
      },
      { name: '网格体统计数据', id: 't-s-gridData', options: [] }
    ]
  },
  {
    name: 'TriEd',
    typeList: [
      {
        name: '三角形编辑',
        id: 't-e-one',
        options: [
          {
            val: 'Extrude',
            tooltip: '挤压当前选定面的集。在视口中点击以确认挤压高度。',
            icon: '#icon-sanjiaoxing-Extrude',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Offset',
            tooltip: '类似于挤压,但默认沿着顶点法线移动顶点，而非朝单一方向移动。',
            icon: '#icon-sanjiaoxing-Offset',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Inset',
            tooltip: '嵌入当前选定面的集。在视口中点击以确认嵌入距离。',
            icon: '#icon-sanjiaoxing-lnset',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Outset',
            tooltip: '外凸当前选定面的集。在视口中点击以确认外凸距离。',
            icon: '#icon-sanjiaoxing-Outset',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Cut Faces',
            tooltip: '剪切当前选定面的集。在视口中点击两次以设置剪切线。',
            icon: '#icon-2-11',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Flip',
            tooltip: '翻转当前选定面的集的法线和面朝向',
            icon: '#icon-sanjiaoxing-flip',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Recalc NormalsFlip',
            tooltip: '重新计算当前选定面的集的法线',
            icon: '#icon-2-10',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Duplicate',
            tooltip: '复制选定面',
            icon: '#icon-sanjiaoxing-Duplicate',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Disconnecttte',
            tooltip: '在边界处分离选定的面',
            icon: '#icon-sanjiaoxing-disconnect',
            class: 'e-s-icon',
            type: 'button'
          },
          {
            val: 'Poke',
            tooltip: '戳每个面的中心点',
            icon: '#icon-sanjiaoxing-poke',
            class: 'e-s-icon',
            type: 'button'
          }
        ]
      },
      {
        name: '边缘编辑',
        id: 't-e-two',
        options: [
          { val: '', tooltip: '', icon: '#icon-', class: 'e-s-icon', type: 'button' },
          {
            val: 'Fill Holelit',
            tooltip: '填充任何选定边界边缘的相邻洞',
            icon: '#icon-chenchongkong-la',
            class: 'icon-s',
            type: 'button'
          },
          { val: 'Flip', tooltip: '', icon: '#icon-kongfan-la', class: 'icon-s', type: 'button' },
          { val: 'Split', tooltip: '', icon: '#icon-fenli-la', class: 'e-s-icon', type: 'button' },
          { val: 'Weld', tooltip: '', icon: '#icon-hanxie-la', class: 'e-s-icon', type: 'button' }
        ]
      },
      {
        name: '选择操作',
        id: 't-e-there',
        options: [
          {
            val: 'Invert Selection',
            tooltip: '反转当前选择。如选择为空，与全选的效果相同，并同样依赖于选择过滤器。',
            icon: '#icon-fanxiangxuanqu',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Select All',
            tooltip: '选择所有元素。根据选择过滤器，其中顶点首选边界，而非面。',
            icon: '#icon-quanxuan',
            class: 'icon-s',
            type: 'button'
          }
        ]
      },
      {
        name: '选项过滤器',
        id: 't-e-four',
        options: [
          { val: 'Select Vertices', tooltip: '', icon: '#icon-xuanzhaidian', class: 'icon-s', type: 'button' },
          { val: 'Select Edges', tooltip: '', icon: '#icon-xuanzhaixian', class: 'icon-s', type: 'button' },
          { val: 'Select Faces', tooltip: '', icon: '#icon-xuanzhaimian', class: 'icon-s', type: 'button' }
        ]
      },
      {
        name: '其他选择选项',
        id: 't-e-five',
        options: [{ val: '边框忽略遮挡', type: 'checkbox', class: 's-c-b-box' }]
      },
      {
        name: '正交视口行为',
        id: 't-e-six',
        options: [
          { val: '首选投影元素', type: 'checkbox', class: 's-c-b-box' },
          { val: '选择下射线', type: 'checkbox', class: 's-c-b-box' },
          { val: '忽略遮挡', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '高级',
        id: 't-e-seven',
        options: [
          { val: '命中返回面', type: 'checkbox', class: 's-c-b-box' },
          { val: '启用边框', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '选项',
        id: 't-e-eight',
        options: [
          { val: '显示线框', type: 'checkbox', class: 's-c-b-box' },
          { val: '显示可选择角落', type: 'checkbox', class: 's-c-b-box' },
          { val: '小工具可见', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '小工具',
        id: 't-e-nine',
        options: [
          {
            val: '本地帧模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '来自几何体' }]
          },
          { val: '锁定旋转', type: 'checkbox', class: 's-c-b-box' }
        ]
      }
    ]
  },
  {
    name: 'HFill',
    typeList: [
      {
        name: '填充洞',
        id: 'h-f-one',
        options: [
          {
            val: '填充类型',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '最小' }]
          },
          { val: '删除孤立的三角形', type: 'checkbox', class: 's-c-b-box' },
          { val: '快速填充小型孔洞', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '选项编辑',
        id: 'h-f-two',
        options: [
          { val: '', tooltip: '', icon: '#icon-fanxiangxuanqu', class: 'icon-s', type: 'button' },
          { val: '', tooltip: '', icon: '#icon-quanxuan', class: 'icon-s', type: 'button' }
        ]
      },
      {
        name: '洞填充统计数据',
        id: 'h-f-there',
        options: [
          { val: '初始洞', type: 'input' },
          { val: '选定洞', type: 'input' },
          { val: '成功填充', type: 'input' },
          { val: '填充失败', type: 'input' },
          { val: '剩余洞', type: 'input' }
        ]
      }
    ]
  },
  {
    name: 'Mirror',
    typeList: [
      {
        name: '镜像',
        id: 'm-r-one',
        options: [
          {
            val: '操作模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '镜像并附加' }, { val: '镜像已存在项' }]
          },
          { val: '首先沿镜面裁剪', type: 'checkbox', class: 's-c-b-box' },
          { val: '在镜面上结合顶点', type: 'checkbox', class: 's-c-b-box' },
          { val: '平面公差', type: 'input' },
          { val: '显示预览', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '高级',
        id: 'm-r-two',
        options: [{ val: '允许领结顶点创造', type: 'checkbox', class: 's-c-b-box' }]
      },
      {
        name: '重定位选项',
        id: 'm-r-there',
        options: [{ val: 'ctrl+点击', type: 'input' }]
      },
      {
        name: '高级',
        id: 'm-r-four',
        options: [{ val: '按钮仅变更朝向', type: 'checkbox', class: 's-c-b-box' }]
      },
      {
        name: '工具输出选项',
        id: 'm-r-five',
        options: [
          {
            val: '保存模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '更新资产' }, { val: '新建资产' }]
          }
        ]
      },
      {
        name: '预设镜像方向',
        id: 'm-r-six',
        options: [
          {
            val: 'Left',
            tooltip: '移动镜像平面并调整其法线,以向左镜像整个选择。',
            icon: '#icon-wangzuojingxiang',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Right',
            tooltip: '移动镜像平面并调整其法线,以向右镜像整个选择。',
            icon: '#icon-wangyoujingxiang',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Up',
            tooltip: '移动镜像平面并调整其法线,以向上镜像整个选择。',
            icon: '#icon-wangshangjingxiang',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Down',
            tooltip: '移动镜像平面并调整其法线,以向下镜像整个选择。',
            icon: '#icon-wangxiajingxiang',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Forward',
            tooltip: '移动镜像平面并调整其法线,以向前镜像整个选择。',
            icon: '#icon-wangqianjingxiang',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Backward',
            tooltip: '移动镜像平面并调整其法线,以向后镜像整个选择。',
            icon: '#icon-wanghoujingxiang',
            class: 'icon-s',
            type: 'button'
          }
        ]
      },
      {
        name: '重定位平面',
        id: 'm-r-seven',
        options: []
      }
    ]
  },
  {
    name: 'PinCut',
    typeList: [
      {
        name: '平面剪切',
        id: 'p-c-one',
        options: [
          { val: '保持两半', type: 'checkbox', class: 's-c-b-box' },
          { val: '两半之间距', type: 'input' },
          { val: '显示预览', type: 'checkbox', class: 's-c-b-box' },
          { val: '填充剪切洞', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '高级',
        id: 'p-c-two',
        options: [{ val: '填充跨度', type: 'checkbox', class: 's-c-b-box' }]
      },
      {
        name: '工具输出选项',
        id: 'p-c-there',
        options: [{ val: '将分离部分导出为新网格体资产', type: 'checkbox', class: 's-c-b-box' }]
      },
      {
        name: '操作',
        id: 'p-c-four',
        options: [
          {
            val: 'Cut',
            tooltip: '用当前的平面进行裁剪，不退出工具（热键:T)',
            icon: '#icon-dangqiancaijian',
            class: 'icon-s',
            type: 'button'
          },
          {
            val: 'Flip Plane',
            tooltip: '翻转剪切平面（热键:R)',
            icon: '#icon-fanzhuanjianqi',
            class: 'icon-s',
            type: 'button'
          }
        ]
      }
    ]
  },
  {
    name: 'PolyCut',
    typeList: [
      {
        name: 'PolyCut',
        id: 'p-l-c-one',
        options: [
          {
            val: '操作',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '修剪外部' }, { val: '修剪内部' }, { val: '插入多边形' }, { val: '剪切穿过' }]
          },
          { val: '用布尔剪切', type: 'checkbox', class: 's-c-b-box' },
          { val: '尝试修补裂缝', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '高级',
        id: 'p-l-c-two',
        options: [
          { val: '可以接受失败结果', type: 'checkbox', class: 's-c-b-box' },
          { val: '失败时显示中间结果', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '形状',
        id: 'p-l-c-there',
        options: [
          {
            val: '形状',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '环形' }, { val: '正方形' }, { val: '矩形' }, { val: '圆角矩形' }, { val: '自定义' }]
          },
          { val: '多边形比例', type: 'input' },
          { val: '宽度', type: 'input' },
          { val: '高度', type: 'input' },
          { val: '角比率', type: 'input' },
          { val: '细分', type: 'input' }
        ]
      },
      {
        name: '操作',
        id: 'p-l-c-four',
        options: [
          {
            val: 'Draw Polygon',
            tooltip: '挤压当前选定面的集。在视口中点击以确认挤压高度。',
            icon: '#icon-huizhiduobianxing',
            class: 'icon-s',
            type: 'button'
          }
        ]
      }
    ]
  },
  {
    name: 'Trim',
    typeList: [
      {
        name: '',
        id: '',
        options: []
      }
    ]
  }
]

const createList = [
  {
    name: 'PolyExt',
    typeList: [
      {
        name: 'polyExt',
        id: 'polyExtConfirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            type: 'checkbox',
            class: 's-c-b-box'
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
            type: 'checkbox',
            class: 's-c-b-box'
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
            class: 's-c-b-box',
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
            type: 'checkbox',
            class: 's-c-b-box'
          },
          {
            val: '对齐到顶点',
            type: 'checkbox',
            class: 's-c-b-box'
          },
          {
            val: '对齐到边缘',
            type: 'checkbox',
            class: 's-c-b-box'
          },
          {
            val: '对齐到轴',
            type: 'checkbox',
            class: 's-c-b-box'
          },
          {
            val: '对齐到长度',
            type: 'checkbox',
            class: 's-c-b-box'
          },
          {
            val: '对齐到表面',
            type: 'checkbox',
            class: 's-c-b-box'
          },
          {
            val: '挤压模式',
            type: 'select',
            class: 's-c-b-box',
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
    name: 'PathExt',
    typeList: [
      {
        name: 'PathExt',
        id: 'pathExtConfirm',
        position: 'ture',
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
          { val: '宽度模式', type: 'select', class: 's-c-b-box', optionsList: [{ val: '交互式' }, { val: '固定' }] },

          { val: '宽度', type: 'input' },
          { val: '圆角', type: 'checkbox', class: 's-c-b-box' },
          { val: '半径模式', type: 'select', class: 's-c-b-box', optionsList: [{ val: '交互式' }, { val: '固定' }] },

          { val: '角半径', type: 'input' },
          { val: '径向切片', type: 'input' },
          { val: '单一多边形组', type: 'checkbox', class: 's-c-b-box' }
        ]
      },
      {
        name: '挤压',
        id: 'pathExtExtrusion',
        options: [
          {
            val: '挤压模式',
            type: 'select',
            class: 's-c-b-box',
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
        name: '路径定义',
        id: 'pathExtConfirm',
        position: 'ture',
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
            class: 's-c-b-box',
            optionsList: [{ val: '静态网格体' }, { val: '体积' }, { val: '动态网格体' }]
          },
          { val: '角度', type: 'input' },
          { val: '偏移度数', type: 'input' },
          { val: '步最大角度', type: 'input' },
          { val: '显示步骤', type: 'checkbox', class: 's-c-b-box' },
          { val: '步', type: 'input' },
          { val: '高度偏移', type: 'input' },
          { val: '倒回', type: 'checkbox', class: 's-c-b-box' },
          { val: '翻转网格体', type: 'checkbox', class: 's-c-b-box' },
          { val: '锐利法线', type: 'checkbox', class: 's-c-b-box' },
          { val: '锐利法线阈值', type: 'input' }
        ]
      },
      {
        name: '高级',
        id: 'pathExtAdvanced',
        options: [
          { val: '到轴的接近路径', type: 'checkbox', class: 's-c-b-box' },
          { val: '到轴的接近路径', type: 'checkbox', class: 's-c-b-box' },
          {
            val: 'PolyGroup模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每个旋转步骤' }, { val: '每条路径段' }]
          },
          {
            val: '四形边分割模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '紧凑' }, { val: '统一' }]
          },
          {
            val: '上限填充模式',
            type: 'select',
            class: 's-c-b-box',
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
      { name: '对齐', id: 'pathExtSnapping', options: [{ val: '启用对齐', type: 'checkbox', class: 's-c-b-box' }] },
      { name: '材质', id: 'pathExtTexture', options: [{ val: '材质名称', type: 'img' }] }
    ]
  },
  {
    name: 'BdryRev',
    typeList: [
      {
        name: 'BdryRev',
        id: 'bdryRevConfirm',
        position: 'ture',
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
            class: 's-c-b-box',
            optionsList: [{ val: '静态网格体' }, { val: '体积' }, { val: '动态网格体' }]
          },
          { val: '角度', type: 'input' },
          { val: '偏移度数', type: 'input' },
          { val: '步最大角度', type: 'input' },
          { val: '显示步骤', type: 'checkbox', class: 's-c-b-box' },
          { val: '步', type: 'input' },
          { val: '高度偏移', type: 'input' },
          { val: '倒回', type: 'checkbox', class: 's-c-b-box' },
          { val: '翻转网格体', type: 'checkbox', class: 's-c-b-box' },
          { val: '锐利法线', type: 'checkbox', class: 's-c-b-box' },
          { val: '锐利法线阈值', type: 'input' }
        ]
      },
      {
        name: '高级',
        id: 'bdryRevAdvanced',
        options: [
          { val: '到轴的接近路径', type: 'checkbox', class: 's-c-b-box' },
          { val: '到轴的接近路径', type: 'checkbox', class: 's-c-b-box' },
          {
            val: 'PolyGroup模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '每个形状' }, { val: '每面' }, { val: '每个旋转步骤' }, { val: '每条路径段' }]
          },
          {
            val: '四形边分割模式',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: '紧凑' }, { val: '统一' }]
          },
          {
            val: '上限填充模式',
            type: 'select',
            class: 's-c-b-box',
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
      { name: '对齐', id: 'pathExtSnapping', options: [{ val: '启用对齐', type: 'checkbox', class: 's-c-b-box' }] },
      { name: '材质', id: 'pathExtTexture', options: [{ val: '材质名称', type: 'img' }] }
    ]
  },
  {
    name: 'Pattern',
    typeList: [
      {
        name: 'Pattern',
        id: 'patternConfirm',
        position: 'ture',
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
            class: 's-c-b-box',
            optionsList: [{ val: '行' }, { val: '网格' }, { val: '环形' }]
          },
          {
            val: '方向',
            type: 'select',
            class: 's-c-b-box',
            optionsList: [{ val: 'X轴' }, { val: 'Y轴' }, { val: 'Z轴' }]
          },
          {
            val: '隐藏源',
            type: 'checkbox',
            class: 's-c-b-box'
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
            class: 's-c-b-box',
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
            type: 'checkbox',
            class: 's-c-b-box'
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
          { val: '统一', type: 'checkbox', class: 's-c-b-box' },
          { val: '开始缩放', type: 'coord' },
          { val: '结束缩放', type: 'coord' }
        ]
      },
      { name: '材质', id: 'patternImg', options: [{ val: '材质名称', type: 'img' }] }
    ]
  },
  {
    name: 'Mashup',
    typeList: [
      {
        name: 'Mashup',
        id: 'mashupConfirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
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
        name: '附加',
        id: 'subjoinConfirm',
        position: 'ture',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
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
            class: 's-c-b-box',
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
        icon: '',
        checkIf: 'ture',
        optionsList: [{ val: '相对位置' }, { val: '绝对位置' }]
      },
      {
        val: '位置',
        type: 'changeCoord',
        icon: '',
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
        class: '',
        optionsList: [{ val: '选择一种类型' }]
      },
      { val: '可被伤害', type: '', class: 's-c-b-box' },
      { val: '初始生命周期', type: 'input' },
      {
        val: '生成碰撞处理方法',
        type: 'select',
        class: '',
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
      { val: '静态网格体复制移动', type: '', class: 's-c-b-box' },
      { val: '查看目标是寻找摄像机组件', type: '', class: 's-c-b-box' },
      { val: '忽略原点偏移', type: '', class: 's-c-b-box' },
      { val: '可存在于集群中', type: '', class: 's-c-b-box' },
      { val: '图层', type: 'addElement', num: '1' },
      { val: '标签', type: 'addElement', num: '2' }
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
