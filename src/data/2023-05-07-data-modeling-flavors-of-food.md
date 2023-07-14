---
title: "Data Modeling Flavors of Food"
date: 2023-05-07
---

Have you ever wondered what makes your favorite dish so delicious? Or why certain flavors pair well together? Developing a data model for storing and categorizing ingredients and recipes, along with their associated flavors, tastes, and aromas, can help answer these questions and provide a wealth of valuable information.
When modeling a dataset of food ingredients or recipes, there are a number of factors to consider if we want to classify recipes and be able to discover novel flavor pairings or combine novel ingredients to create a classic flavor profile.
I'll touch on some of the basics of flavor in this post, and how I might begin to develop a data model for storing such information.

## Taste

Sweet, salty, sour, bitter, umami. Every bite of food you have taken has been a combination of these five tastes.
We taste them individually as well as in concert, working together to produce simplicity and complexity on the palate.
Bitterness suppresses sweetness.
Saltiness stimulates the appetite.
Sweetness is satiating.
Tastes are heavily influenced by freshness and ripeness, which is the number one reason to eat as locally as possible!

### Sweetness

It takes the greatest quantity of sweetness to register on the taste buds. However, we do still perceive and appreciate the balancing affect that lesser amounts of sweetness have on flavors.
Pair sweetness with bitterness, sourness, and saltiness.

### Saltiness

Salt is nature's flavor enhancer. Talk to any top chef, and they'll tell you it is the single most important taste for making savory food delicious. Think about it - salt is to savory as sweet is to dessert. Saltiness in a meal can come from various sources other than salt. Certain cheeses like pecorino romano, soy sauce or coconut aminos, and even celery contribute saltiness.

### Sourness

The second most important flavor enhancer in both savory and sweet dishes is sourness.
Add a spark of brightness to a meal by adding a squeeze of a lemon or a splash of vinegar. Balancing the acidity with the other tastes is essential to any meal.

### Bitterness

We humans are, perhaps, most sensitive to bitterness, of all the tastes. It doesn't take much. Bitterness balances sweetness and also cuts richness - think of the bitterness of very dark chocolate in a rich dessert.

### Umami

The taste of savoriness. Think of a savory or meaty mouthfeel. This taste is noticeable in aged cheeses like blue cheese, fermented foods like miso, mushrooms, and sea vegetables.
The name umami came about with the discovery of monosodium glutamate (msg), which is a naturally occurring amino acid salt that is formed when glutamic acid and salt combine during the cooking process. This can come from meals such as tomato soup, or miso soup. Miso soup is made not only with miso, but a broth called dashi, which made with a sea vegetable called kombu. FWIW, I would never reccomend adding msg powder to any food, but it's important to acknowledge where msg appears in cooking and to understand it's role in flavor, and not to vilify a naturally occurring chemical when it occurs naturally.

## Mouthfeel

The mouth not only senses taste, but registers other senses such as touch, temperature, and texture that play roles in flavor.

### Temperature

The temperature of food affects our ability to perceive flavors. For example, ice cream that is delicious just out of the freezer may very well be far too sweet when warm and melted - coldness dulls sweetness. Not only can the temperature affect the flavor, but also the enjoyment of the dish as in a cold gazpacho in the heat of summer vs hot tomato soup on a crisp, cold autumn afternoon.

### Texture

Texture is central to a food's ability to captivate or please. We all enjoy many different textures: think of the comforting creaminess of perfect mashed potatoes, or the fun crisp snap of a chip. Texture can activate and invigorate our other senses.

### Piquancy

This is the sensation most commonly referred to as "hot". Comes in varying degrees of sharpness or spiciness and is especially associated with chile peppers.

### Astringency

A puckering or drying sensation. Caused by tannins in red wine and strong black tea. Also found in cranberries and some unripe fruits.

## Aroma

Aroma contributes as much as 80% (or more) of flavor. Aromatic ingredients like fresh herbs, spices, or lemon zest can enhance to aroma of a dish, which enhances its flavor.
While there are 5 basic tastes, there is an almost infinite number of aromatic notes that contribute to the flavor of food!
Most aromas tend to be characterized as sweet or savory.

### Sweet

Associated with sweeteners, fruits, certain vegetables, herbs, and spices.

### Savory

Associated with "meatiness", alliums such as onions and garlic. Can also include cheesiness, smokiness, and spiciness.

### Pungency

Refers to the taste and aroma of foods. Think of horseradish and mustard - irritating yet pleasing sensations in the nose and mouth.

### Chemesthesis

Refers to the tingling sensations like those from carbonated beverages, the heat sensations from chili peppers, the cooling sensation from mints, or the mini-explosions of pop rocks candy.
Then there is the x-factor found in flavor. The factor or factors that greatly affect one's ability to perceive and experience flavor. This can be anything from visual, to emotional, to mental, or spiritual factors. One person may have fond memories from their youth eating fresh blackberries out of a blackberry patch on their grandparents property, while another may be allergic. They will both have different reactions to blackberry flavor! Think of someone who eats only plant-based foods compared to someone who is an omnivore - they'll likely have very different experiences in a steakhouse or vegan cafe, while the food in both places may be considered excellent by many.
To sum:
We can categorize whole food ingredients using properties such as:

<pre><code>taste                   = ['sweetness', 'saltiness', 'sourness', 'bitterness', 'umami']
mouthfeel               = ['temperature', 'texture', 'piquancy', 'astringency']
aroma                   = ['sweet', 'savory', 'pungency', 'chemesthesis']
primaryFlavorNotes      = ""
briefTextureDescription = ""
volume                  = ['quiet', 'mild', 'medium', 'loud']
seasonalPeak            = ['winter', 'spring', 'summer', 'autumn']
</code></pre>
<p>Additional information that would be helpful to link would be:</p>
<pre><code>nutritionalInfo      -&gt; full nutrition facts
containsGluten       -&gt; will it work in a gluten free meal?
macroNutrients       -&gt; (i.e. Calories or protein)
commonTechnique      -&gt; (what are the most common ways of preparing the ingredient)
tips                 -&gt; anything important or relevant not covered in the other topics
botanicalRelatives   -&gt; sometimes serves as inspiration for dishes or food pairings
culinarySubstitues   -&gt; what foods would substitute well for a given ingredient in a dish?
strongFlavorPairings -&gt; what foods/flavors pair very well, or classically with a given item?
weakFlavorPairings   -&gt; what foods/flavors pair somewhat well?
</code></pre>
