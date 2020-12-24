<template>
<div>
    <ClippedFrame :topFrame="true" />
        <slot name="content"></slot>
    <ClippedFrame :topFrame="false" />
</div>
</template>

<script>
import ClippedFrame from "./CustomHalfClipped/ClippedFrame"
export default {
    components:{
        ClippedFrame
    }
}
</script>