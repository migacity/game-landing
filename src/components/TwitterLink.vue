<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    name: string
}>()
const link = ref(`https://twitter.com/${props.name}`)
</script>

<template>
<div class="inline">
    <a :href="link" class="">
        <img class="inline scale-50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAACoklEQVRYhe2XTUhUURTHf+/N681X41eCjjCFYA6IRVRIaBDZSiVaWKi5cNMiclUt2tTKRbiIXLWZIIgWIlFR9A1jLTJBR4OskApEA1NRR5tx3ryZN6+VYDlv5s3gNC38L++9nPM7595zD0fQdZ3dt1dqgV6gEbCRWymAH7gyfa5wQvD4grXAO6Agx47/1irQIHh8wadA8z92vq5ngscXjJD7tBtJETy+oJ4n5wBsA2wZgCCA2yGiaDpLinmTKQHcTpHZcCKtkXavzOVDVsocIgDj8xpXhyJ8DyZoqpSYXEowsahlBmCTBN63uej2rzE0Gzd03lUj01Nv37SuaDroMPxT44J/jZCaPE5DgKoiEf9pF1ENrg1F6J9UN52xSwKjZ124ZCGp8VgCAnNxXk/H8X2MZgZQahcIdBawbvrNjzi9IwqfNqTycJmFByd3JjUMoAN9Ywp9Y1GM7jnlG+hvdlJfIf2xFpjXeDUV48OCxi6bwK0TDkMAVYOqOyuG+ykBiq0C+0ot3DjmoMyRPMXptKToHLi3mh2A2yky3OFC1cBqyco/4/Mapx6HsgMAGGhxcsQtGW2nlW8iSs+wkj3AngKRgRYnbqeYFUDrkzAjc8YlnBYAoK5c4uJBKw0VmWXi86JG08OQ4es3DWD00aRT18swgzOpozcFIApw/aidDq9s2vn9ryqX3kZMnTXdjOrKJTq8O2jdmxpkdE6j83mYSNxcQzIFUGITaPfKnN9vpchq/CcMzsTp9q8Rim1BNzzukWirlqksFKkutmBJ8RctR3VuBhTuflFJZNjcU2bA4xI5Uy3T6JGoKbEgbajGX6rO+ILGi6kYj77FMoraNMBGSSKU2kVkEUIxnWVFT1tiWwqQK20D/BeDSd5Hs/wOp/kez38DsAgmclG4FbEAAAAASUVORK5CYII="/>
    </a>
</div>
</template>
