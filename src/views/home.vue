<script>
import { defineComponent } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import axios from 'axios'

export default defineComponent({
  components: {
    Button,
  },
  data() {
    return {
      data: [],
      loading: false,
      error: null,
    }
  },
  methods: {
    async fetchData() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
          'https://pokeapi.co/api/v2/pokemon/1/',
        )
        this.data = await Promise.all(
          response.data.results.map(async item => {
            const spriteUrl = await this.getSpriteUrl(item.url)
            const types = await this.getTypes(item.url)
            const stats = await this.getStats(item.url)
            return { ...item, spriteUrl, types, stats }
          }),
        )
      } catch (err) {
        this.error = 'เกิดข้อผิดพลาดในการโหลดข้อมูล'
      } finally {
        this.loading = false
      }
    },
    async getSpriteUrl(url) {
      try {
        const response = await axios.get(url)
        return response.data.sprites.front_default
      } catch (err) {
        console.error(err)
        return ''
      }
    },
    async getTypes(url) {
      try {
        const response = await axios.get(url)
        return response.data.types.map(typeInfo => typeInfo.type.name)
      } catch (err) {
        console.error(err)
        return []
      }
    },
    async getStats(url) {
      try {
        const response = await axios.get(url)
        return response.data.stats.map(statInfo => ({
          name: statInfo.stat.name,
          base_stat: statInfo.base_stat,
        }))
      } catch (err) {
        console.error(err)
        return []
      }
    },
  },
})
</script>
<template>
  <div class="flex flex-col items-center">
    <label class="text-xl">API</label>
    <label class="text-xl">Pokemon</label>
    <div class="mt-3 mb-4">
      <Button class="text-white" severity="info" @click="fetchData"
        >Get pokemon dex</Button
      >
    </div>

    <div v-if="loading">กำลังโหลด...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid grid-cols-8 gap-3">
      <div
        v-for="item in data"
        :key="item.name"
        class="pl-3 w-[150px] h-[320px] flex flex-col bg-[#78c84f] rounded"
      >
        <img
          v-if="item.spriteUrl"
          :src="item.spriteUrl"
          alt="Pokemon Image"
          class="w-[96px] h-[96px] mt-2 mx-auto"
        />
        <div class="flex text-start">
          <span class="font-bold">Name :</span>
          <label class="ml-1">{{ item.name }}</label>
        </div>
        <div class="text-sm text-start">
          <div v-if="item.types.length">
            <div v-for="(type, index) in item.types" :key="index">
              <span class="font-bold">Type {{ index + 1 }} :</span> {{ type }}
            </div>
          </div>
        </div>
        <div v-if="item.stats.length" class="text-sm text-start">
          <label class="font-bold"> Base stats : </label>
          <div v-for="(stat, index) in item.stats" :key="index">
            {{ stat.name }} = {{ stat.base_stat }}
            <div v-if="index < item.stats.length - 1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
