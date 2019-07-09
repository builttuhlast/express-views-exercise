<h1>Shops</h1>

<a href="/shops/new">New Shop</a>

<ul>
  {{#each shops}} 
    <li>
      <a href="shops/{{@index}}">{{name}}</a>
    </li>
  {{/each}}
</ul>