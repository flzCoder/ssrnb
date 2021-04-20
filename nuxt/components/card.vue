<template>
  <div>
    <section
      id="VA01VOFIH"
      class="m_article list-item js-newlist-app clearfix"
      data-param="VA01VOFIH"
    >
      <a target="_blank" :href="item.url">
        <div class="m_article_img">
          <div class="m_article_mark mark_new">视频</div>
          <img :src="item.imgsrc" />
        </div>
        <div class="m_article_info">
          <div class="m_article_title">
            <span>{{ item.title }}</span>
          </div>
          <div class="m_article_desc clearfix">
            <div class="m_article_desc_l">
              <span class="m_article_time">3天前</span>
            </div>
            <div class="m_article_desc_r">
              <div class="left_hands_desc">
                <span class="iconfont"></span>{{ item.commentCount }}
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style>
.m_article {
  font-size: 0.24rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 0.22rem;
}

.m_article .m_article_img {
  float: left;
  width: 2.34rem;
  height: 1.46rem;
  overflow: hidden;
  position: relative;
  margin-right: 0.2rem;
}

.m_article .m_article_img .m_article_mark {
  color: #fff;
  background: #5da3e9;
  font-size: 0.28rem;
  text-align: center;
  padding: 0.04rem;
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  width: 0.6rem;
  height: 0.4rem;
  line-height: 0.4rem;
  opacity: 0.9;
}

.m_article .m_article_img img {
  width: 100%;
  display: block;
  min-height: 1.4rem;
}

.m_article .m_article_info {
  overflow: hidden;
  padding-bottom: 4px;
}

.m_article .m_article_info .m_article_title {
  font-size: 0.34rem;
  margin-bottom: 0.2rem;
  color: #404040;
  line-height: 0.42rem;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-line-break: auto;
  -webkit-box-orient: vertical;
}

.m_article_desc {
  line-height: 0.33rem;
}

.m_article .m_article_desc .m_article_desc_l {
  float: left;
}

.m_article .m_article_desc .m_article_time {
  font-size: 0.24rem;
  color: #888;
  display: inline-block;
}

.m_article .m_article_desc .m_article_desc_r {
  float: right;
  background-size: contain;
  background-position: left 0;
  background-repeat: no-repeat;
  color: #888;
  line-height: 0.37rem;
}
</style>
