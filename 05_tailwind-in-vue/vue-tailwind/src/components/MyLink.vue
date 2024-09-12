<template>
  <a href="url" class="p-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 rounded shadow hover:shadow-2xl transition duration-300">{{text}}</a>
</template>

<script>
export default{
  props: ["url", "text"]
}
</script>