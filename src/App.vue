<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
	<Header />
	<RouterView />
	<Contact />
	<Footer />
</template>
