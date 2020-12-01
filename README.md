### Interactive-Visualizations_challenge
## Plotly Homework - Belly Button Biodiversity

I was assigned to build an interactive dashboard to explore a dataset involving Belly Button Biodiversity. This dataset catalogs the microbes that colonize the human navels.

# Step 1
I used the D3 library to read in my data (samples.json).
Next, I created a horizontal bar chart with a dropdown menu. The dropdown menu displayed the top 10 operational taxonomic units (OTUs), found in individuals.

# Values for the barchart = sample_values
# Labels for the bar chart = otu_ids
# Hovertext for the bar chart = otu_labels

# Step 2
Next, I displayed the sample metadata. I created a panel that was linked to the dropdown menu and barchart. This panel consisted of the updated individual demographics which include; ID, Ethnicity, Gender, Age, Location, BBtype, Wfreq (these are the key-value pair from the metadata JSON). So, each time the user changes the test subject ID number the barchart and the panel will show that relevant information.

# Step 3
Finally, I created an interactive bubble chart that is also linked to the dropdown menu, barchart, and updated demographics panel. The Plotly bubble chart displays each sample.
# otu_ids = x values and marker colors
# sample_values = y values and marker size
# otu_labels = text values

# Step 4
Each time a new sample is selected all plots will update. This is very important in order for the dashboard to display only relevant data with each selection.





About the Data
Hulcr, J. et al.(2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
