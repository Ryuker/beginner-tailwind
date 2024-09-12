<template>
  <div class="min-h-screen p-20 bg-blue-300 space-x-8">
    <Link url="#" text="first" />
    <Link url="#" text="second" />
    <Link url="#" text="third" />
    <Link url="#" text="fourth" />
    <Link url="#" text="fifth" />
  </div>
</template>

<script>
import Link from './components/MyLink';
export default {
  name: 'App',
  components: {
    Link
  }
}
</script>

<style>
</style>
