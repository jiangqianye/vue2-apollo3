import gql from 'graphql-tag';

export default {
      // 获取首页banner图片
  GET_WEB_BANNERS: gql`
  query GET_WEB_BANNERS(
    $locationKey:String!,
    $distributionPlatform:DistributionPlatform!,
    $cubeListCategory:MomentListCategory!,
    $type:CubeType!,
    $page:Int!,
    $pageSize:Int!){  
    getWebBanners(locationKey:$locationKey){
      title
      alt
      url
      destination
    }
    getWebCubesByType(
      distributionPlatform:$distributionPlatform,
      cubeListCategory:$cubeListCategory,
      type:$type,
      page:$page,
      pageSize:$pageSize){
      total
      list{
        album{
          id
          contentId
          title
        }
      }
    }
  }`,

  // 获取详情
  GET_USER_DETAIL:gql`
  query findPersonBaseByUseridAndAuthstatus($userId:String!,$infoType:Int!){
    findPersonBaseByUseridAndAuthstatus(userId:$userId,infoType:$infoType){
      basic{
        id
        nickName
        headPortrait
        gender
        identities
      }
      videoCoverUrl
      star
      chatPrice
      totalCashWithdraw
      totalCashWithdrawUnit
      avaliavleCash
      cacheUnit
      recentUsedCashAccount{
           id
           catagory
           account
      }
      personalPhotos{
        url
      }
      personalVideos{
        url
      }
      modelInfo{
        createTime
        passedTime
        updateTime
           appointmentSetting{
           appointmentAuthorized
           appointmentEnable
        }
      }
      wechat
      idPositive{
        url
      }
      idNegative{
        url
      }
      honor
      impressions
      signature
      photographerHead
      photographerComment
      worksUrl
    }
}
  `
}