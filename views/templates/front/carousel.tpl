
<div class="pc-container">
    <div class="pc-button" id="pc-left"><</div>
    <div class="pc-carousel">
        <div class="pc-cards">
            {foreach $products as $product}
                <div class="pc-card">
                    <a href="{$product['product_link']}">
                        <div class="pc-title">{$product['name']}</div>
                        <div class="pc-image">
                            <img src="{$product['image_link']}">
                        </div>
                        <div class="pc-price">{$product['price']} {$product['currency']}</div>
                    </a>
                </div>
            {/foreach}
        </div>
    </div>
    <div class="pc-button" id="pc-right">></div>
</div>
<script>carousel()</script>
