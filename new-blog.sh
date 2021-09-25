#!/bin/bash   
# Create new Blog dir and template Markdown

# first var is date
echo $1

# second var is title
echo $2

IFS='-' read -r -a array <<< $1


if [ -d "./content/blog/${array[0]}" ]; then
    echo 'creating dir'
    mkdir -p "./content/blog/${array[0]}/$1-$2" && cd "$_"
    touch index.md
    {
        echo '---'
        echo "title: $2"
        echo "date: '$1'"
        echo 'description: ""'
        echo 'published: true'
        echo '---'
        echo ''
        echo "## $2"
    } >> index.md
else
    # mkdir
    echo 'dfssdfds'
fi
