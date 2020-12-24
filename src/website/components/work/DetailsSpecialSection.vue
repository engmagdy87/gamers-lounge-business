<template>
<div>
    <CustomHalfClipped>
        <template #content>
            <div v-for="row in section.rows" :key="row.id"  class="work-details-sections__container row m-0">
                <div  v-for="column in row.columns" :key="column.index" :style="{width: getWidth(column.ratio)}">

                    <div v-if="column.type === WORK_COLUMNS_TYPES.TITLE && column.fillable === true" class="work-details-sections__title">
                        {{column.content}}
                    </div>

                    <div v-else-if="column.type === WORK_COLUMNS_TYPES.IMAGE && column.fillable === true" v-for="img in column.img_content" :key="img.id">
                        <img :src="img.url" width="100%" draggable="false">
                    </div>

                    <div v-else-if="column.type === WORK_COLUMNS_TYPES.VIDEO && column.fillable === true" v-for="video in column.vid_content" :key="video.id">
                        <video :src="video.url" width="100%" controls></video>
                    </div>

                    <div v-else-if="column.type === WORK_COLUMNS_TYPES.SLIDER && column.fillable === true" >
                        <Carousel3d
                            :autoplay="true"
                            :autoplay-timeout="3000"
                            :autoplayHoverPause="true"
                            :height="400"
                            :width="500"
                            :border="0"
                        >
                            <Slide
                            v-for="(img, i) in column.img_content"
                            :index="i"
                            :key="i"
                            >
                            <img :src="img.url" draggable="false" />
                            </Slide>
                        </Carousel3d>
                    </div>

                    <div v-if="column.type === WORK_COLUMNS_TYPES.DESCRIPTION && column.fillable === true"
                    class="work-details-sections__description"
                    v-html="column.content">
                    </div>

                </div>
            </div>
        </template>
    </CustomHalfClipped>
</div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import isDeviceSmart from "../../../helpers/DetectIsDeviceSmart";
import CustomHalfClipped from "../../shared/CustomHalfClipped";
import * as WORK_COLUMNS_TYPES from "../../../constants/WorkColumnsContentTypes";
export default {
  props: ["section"],
  components:{ 
    Carousel3d,
    Slide,
    CustomHalfClipped
    },
  computed:{
    WORK_COLUMNS_TYPES() {
      return WORK_COLUMNS_TYPES;
    },
  },
  methods:{
    getWidth(ratio){
     return isDeviceSmart() ? '100%' : ratio +'%';
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-details-section.scss";
</style>