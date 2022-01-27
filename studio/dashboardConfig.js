export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f2d5348e6bb6005af4a54a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kk1be847',
                  apiId: 'c314c115-c3a4-4012-8c1c-8f7cde9822df'
                },
                {
                  buildHookId: '61f2d5347d06760057f794ac',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-5zikz77y',
                  apiId: '8fbc18be-65e9-4e3a-a40e-f4cdb72b12a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salvowsky/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-5zikz77y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
