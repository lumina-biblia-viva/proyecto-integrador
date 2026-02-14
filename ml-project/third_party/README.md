# Third party

In case this project needs external third party libraries, please use git
[submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

Example:

If lumina-ml requires `pybind11` do the following:

Create `.gitmodules` in the root directory with the following content

```
[submodule "third_party/pybind11"]
	path = third_party/pybind11
	url = https://github.com/pybind/pybind11.git
```

And add `.gitmodules` to the git repo. Other team members should run

```shell
git pull --recurse-submodules
```

To download the newest version of the code and the respective submodules.

The remainder of this file reproduces the open source licensing details of other
projects that have been imported, incorporated into, or derived into parts of
lumina-ml.

| Repository | Version | License |
| ---------- | ------- | ------- |
|            |         |         |

If we have left anything out, it is unintentional. Please let us know.
