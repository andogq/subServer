#!/bin/bash

DEST="$1"

if [ -z "$DEST" ]; then exit 1; fi

inotifywait -r -m -e close_write --format '%w%f' . |\
while read file
do
    file=${file:2}
    echo "rsync -azvq ./$file ${DEST}"
	rsync -azvq ./$file ${DEST}
	echo -n 'Completed at '
	date
done
