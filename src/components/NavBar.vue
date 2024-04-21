<template>
  <v-card>
    <v-list class="d-flex" nav>
      <v-list-item
      :to="{ path: '/' }" 
      title="Home" 
      value="home" 
      />
      <v-list-item
        :to="{ path: '/newPost' }"
        title="Create New Post"
        value="newPost"
      />
    </v-list>
  </v-card>
</template>
