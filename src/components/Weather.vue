<script setup>
import axios from 'axios'

const key = import.meta.env.WEATHER_API_KEY
const city = 'Hilversum'

// const weather = await axios.get(`/forecast.json?key=${key}&q=${city}&days=5&lang=nl`)
const weather = await axios.get('http://localhost:3000/api/forecast.json')
</script>

<template>
  {{ weather }}
</template>
