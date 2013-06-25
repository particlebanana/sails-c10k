# c10k

Testing what is required to reach C10k with Sails 0.9RC1 on EC2.

Results seem to be the more servers the better rather than how large they are. The Small instances
performed quite well compared to their Large counterparts, especially for the price.

Note: I added cluster support in this version of sails which is why node_modules is checked in.
Clustering is not currently used in Sails RC1.

Results are in the Benchmarks folder.
