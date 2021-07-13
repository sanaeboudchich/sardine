<template>
  <div class="crousel" id="crousel">
    
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#FE007A"
      img-width="70%"
      img-height="50%"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      
      <!-- Slides with custom text -->
      
   
      <!-- Slides with image only -->
      
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
        <div class='content'>
          <div class="row">
            <div class="col-5">
                 <img
            class="d-block img-fluid w-100"
            width="200"
            height="480"
            src="../assets/terre.png"
            caption='hi'
            alt="image slot"
            >
            </div>
            <div class="col-7">
              <h1>hello</h1>
              </div>

            </div>
          </div>
        </template>
      </b-carousel-slide>


   <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="200"
            height="480"
            src="../assets/etape2.png"
            caption='hi'
            alt="image slot"
            >
        </template>
      </b-carousel-slide>
       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="200"
            height="480"
            src="../assets/etape3.png"
            caption='hi'
            alt="image slot"
            >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="200"
            height="480"
            src="../assets/etape4.png"
            caption='hi'
            alt="image slot"
            >
        </template>
      </b-carousel-slide>



      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
     
    
    </b-carousel>

   
  </div>
</template>

<script>
  export default {
    name:'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
