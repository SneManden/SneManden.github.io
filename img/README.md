# Utilities for image and video manipulation

## General
Apply to all image files:

    for f in *.jpg; do <command here on file $f>; done

## Resize image to max 800x600
Resize image and save to a new file:

    convert source.jpg -resize 800x\> result.jpg
    convert source.jpg -resize x600\> result.jpg

Modify image directly:

    mogrify -resize 800x\> source.jpg
    mogrify -resize x600\> source.jpg

## Rotate image
Rotate an image 90 degress clockwise

    convert input.jpg -rotate 90 out.jpg

