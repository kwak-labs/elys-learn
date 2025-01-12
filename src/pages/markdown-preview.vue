<template>
  <div class="max-w-[1600px] mx-auto px-8 py-8">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-golden-grass mb-2">Markdown Preview</h1>
      <p class="text-ebb/80">Write markdown on the left and see the preview on the right</p>
    </div>

    <div class="flex gap-8 h-[calc(100vh-12rem)]">
      <!-- Editor Section -->
      <div class="flex-1 flex flex-col">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-xl font-bold text-golden-grass">Editor</h2>
          <div class="text-sm text-ebb/60">Markdown</div>
        </div>
        <textarea
          v-model="markdownContent"
          class="flex-1 p-4 bg-base-200/50 rounded-lg border border-golden-grass/20 
                 focus:border-primary/50 focus:ring-2 focus:ring-primary/20
                 font-mono text-sm text-ebb/90 resize-none
                 shadow-lg"
          placeholder="Enter your markdown here..."
        ></textarea>
      </div>

      <!-- Preview Section -->
      <div class="flex-1 flex flex-col">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-xl font-bold text-golden-grass">Preview</h2>
          <div class="text-sm text-ebb/60">Rendered HTML</div>
        </div>
        <div 
          class="flex-1 p-6 bg-base-200/50 rounded-lg border border-golden-grass/20 
                 overflow-y-auto shadow-lg"
        >
          <MDC 
            :value="markdownContent"
            class="prose prose-lg prose-base-content max-w-none
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
                   prose-ol:text-ebb/90"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const markdownContent = ref(`# Welcome to the Markdown Preview

Try writing some markdown here! For example:

## Formatting Examples

- **Bold text**
- *Italic text*
- ~~Strikethrough~~

## Code Example

\`\`\`javascript
const greeting = "Hello World!";
console.log(greeting);
\`\`\`

## Links and Images

[Visit Elys Network](https://elys.network)

> This is a blockquote. It can be used to highlight important information.
`)
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
textarea::-webkit-scrollbar,
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track,
.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb,
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(226, 155, 33, 0.3);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover,
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(226, 155, 33, 0.5);
}
</style> 