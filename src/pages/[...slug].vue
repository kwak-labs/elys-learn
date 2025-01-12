<template>
  <main>
    <ContentDoc class="prose prose-lg prose-base-content
                      prose-headings:text-golden-grass
                      prose-h1:text-2xl prose-h1:font-bold prose-h1:border-b prose-h1:border-golden-grass/20 prose-h1:pb-4
                      prose-h2:text-sepia prose-h2:text-xl
                      prose-h3:text-sepia/90
                      prose-a:text-golden-grass hover:prose-a:text-golden-grass/80
                      prose-strong:text-ebb
                      prose-pre:bg-night-rider prose-pre:border prose-pre:border-golden-grass/20
                      prose-pre:shadow-lg
                      prose-blockquote:border-l-golden-grass
                      prose-img:rounded-xl prose-img:shadow-lg
                      prose-p:text-ebb/90
                      prose-ul:text-ebb/90
                      prose-ol:text-ebb/90">
      <template #not-found>
        <div class="text-center py-16">
          <h1 class="text-4xl font-bold text-golden-grass mb-4">404</h1>
          <h2 class="text-2xl text-sepia mb-8">Page Not Found</h2>
          <p class="text-ebb/90 mb-8">
            The page you're looking for doesn't exist or has been moved, or someone messed up.
          </p>
          <NuxtLink 
            to="/en/" 
            class="inline-flex items-center px-6 py-3 rounded-lg bg-golden-grass/10 
                   text-golden-grass hover:bg-golden-grass/20 transition-colors duration-200"
          >
            <svg 
              class="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return Home
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
