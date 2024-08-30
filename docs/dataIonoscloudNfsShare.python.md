# `dataIonoscloudNfsShare` Submodule <a name="`dataIonoscloudNfsShare` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudNfsShare <a name="DataIonoscloudNfsShare" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share ionoscloud_nfs_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShare(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  client_groups: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroups]] = None,
  gid: typing.Union[int, float] = None,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None,
  quota: typing.Union[int, float] = None,
  uid: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Network File Storage Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clientGroups">client_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]</code> | client_groups block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.gid">gid</a></code> | <code>typing.Union[int, float]</code> | The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using the name filter. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.quota">quota</a></code> | <code>typing.Union[int, float]</code> | The quota in MiB for the export. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.uid">uid</a></code> | <code>typing.Union[int, float]</code> | The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the Network File Storage Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#cluster_id DataIonoscloudNfsShare#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.location"></a>

- *Type:* str

The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#location DataIonoscloudNfsShare#location}

---

##### `client_groups`<sup>Optional</sup> <a name="client_groups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clientGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]

client_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#client_groups DataIonoscloudNfsShare#client_groups}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.gid"></a>

- *Type:* typing.Union[int, float]

The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#gid DataIonoscloudNfsShare#gid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id"></a>

- *Type:* str

The ID of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#id DataIonoscloudNfsShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.name"></a>

- *Type:* str

The name of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#name DataIonoscloudNfsShare#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.partialMatch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#partial_match DataIonoscloudNfsShare#partial_match}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.quota"></a>

- *Type:* typing.Union[int, float]

The quota in MiB for the export.

The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#quota DataIonoscloudNfsShare#quota}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.uid"></a>

- *Type:* typing.Union[int, float]

The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#uid DataIonoscloudNfsShare#uid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups">put_client_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetClientGroups">reset_client_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetPartialMatch">reset_partial_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetUid">reset_uid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_client_groups` <a name="put_client_groups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups"></a>

```python
def put_client_groups(
  value: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]

---

##### `reset_client_groups` <a name="reset_client_groups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetClientGroups"></a>

```python
def reset_client_groups() -> None
```

##### `reset_gid` <a name="reset_gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_partial_match` <a name="reset_partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetPartialMatch"></a>

```python
def reset_partial_match() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetUid"></a>

```python
def reset_uid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudNfsShare resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShare.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShare.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudNfsShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudNfsShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudNfsShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudNfsShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroups">client_groups</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList">DataIonoscloudNfsShareClientGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nfsPath">nfs_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroupsInput">client_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatchInput">partial_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quotaInput">quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quota">quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `client_groups`<sup>Required</sup> <a name="client_groups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroups"></a>

```python
client_groups: DataIonoscloudNfsShareClientGroupsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList">DataIonoscloudNfsShareClientGroupsList</a>

---

##### `nfs_path`<sup>Required</sup> <a name="nfs_path" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nfsPath"></a>

```python
nfs_path: str
```

- *Type:* str

---

##### `client_groups_input`<sup>Optional</sup> <a name="client_groups_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroupsInput"></a>

```python
client_groups_input: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partial_match_input`<sup>Optional</sup> <a name="partial_match_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatchInput"></a>

```python
partial_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quotaInput"></a>

```python
quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partial_match`<sup>Required</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quota"></a>

```python
quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudNfsShareClientGroups <a name="DataIonoscloudNfsShareClientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups(
  description: str = None,
  hosts: typing.List[str] = None,
  ip_networks: typing.List[str] = None,
  nfs: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroupsNfs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.description">description</a></code> | <code>str</code> | Optional description for the clients groups. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | A singular host allowed to connect to the share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.ipNetworks">ip_networks</a></code> | <code>typing.List[str]</code> | The allowed host or network to which the export is being shared. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.nfs">nfs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]]</code> | nfs block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the clients groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#description DataIonoscloudNfsShare#description}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

A singular host allowed to connect to the share.

The host can be specified as IP address and can be either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#hosts DataIonoscloudNfsShare#hosts}

---

##### `ip_networks`<sup>Optional</sup> <a name="ip_networks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.ipNetworks"></a>

```python
ip_networks: typing.List[str]
```

- *Type:* typing.List[str]

The allowed host or network to which the export is being shared.

The IP address can be either IPv4 or IPv6 and has to be given with CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#ip_networks DataIonoscloudNfsShare#ip_networks}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.nfs"></a>

```python
nfs: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroupsNfs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]]

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#nfs DataIonoscloudNfsShare#nfs}

---

### DataIonoscloudNfsShareClientGroupsNfs <a name="DataIonoscloudNfsShareClientGroupsNfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs(
  squash: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.property.squash">squash</a></code> | <code>str</code> | The squash mode for the export. |

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.property.squash"></a>

```python
squash: str
```

- *Type:* str

The squash mode for the export.

The squash mode can be: none - No squash mode. no mapping, root-anonymous - Map root user to anonymous uid, all-anonymous - Map all users to anonymous uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#squash DataIonoscloudNfsShare#squash}

---

### DataIonoscloudNfsShareConfig <a name="DataIonoscloudNfsShareConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  client_groups: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroups]] = None,
  gid: typing.Union[int, float] = None,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None,
  quota: typing.Union[int, float] = None,
  uid: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Network File Storage Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.location">location</a></code> | <code>str</code> | The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clientGroups">client_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]</code> | client_groups block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.id">id</a></code> | <code>str</code> | The ID of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.name">name</a></code> | <code>str</code> | The name of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using the name filter. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.quota">quota</a></code> | <code>typing.Union[int, float]</code> | The quota in MiB for the export. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the Network File Storage Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#cluster_id DataIonoscloudNfsShare#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#location DataIonoscloudNfsShare#location}

---

##### `client_groups`<sup>Optional</sup> <a name="client_groups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clientGroups"></a>

```python
client_groups: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]

client_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#client_groups DataIonoscloudNfsShare#client_groups}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#gid DataIonoscloudNfsShare#gid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#id DataIonoscloudNfsShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#name DataIonoscloudNfsShare#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#partial_match DataIonoscloudNfsShare#partial_match}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.quota"></a>

```python
quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The quota in MiB for the export.

The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#quota DataIonoscloudNfsShare#quota}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.2/docs/data-sources/nfs_share#uid DataIonoscloudNfsShare#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudNfsShareClientGroupsList <a name="DataIonoscloudNfsShareClientGroupsList" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudNfsShareClientGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]]

---


### DataIonoscloudNfsShareClientGroupsNfsList <a name="DataIonoscloudNfsShareClientGroupsNfsList" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudNfsShareClientGroupsNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroupsNfs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]]

---


### DataIonoscloudNfsShareClientGroupsNfsOutputReference <a name="DataIonoscloudNfsShareClientGroupsNfsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resetSquash">reset_squash</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_squash` <a name="reset_squash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resetSquash"></a>

```python
def reset_squash() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squashInput">squash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squash">squash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `squash_input`<sup>Optional</sup> <a name="squash_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squashInput"></a>

```python
squash_input: str
```

- *Type:* str

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squash"></a>

```python
squash: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudNfsShareClientGroupsNfs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]

---


### DataIonoscloudNfsShareClientGroupsOutputReference <a name="DataIonoscloudNfsShareClientGroupsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_nfs_share

dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetIpNetworks">reset_ip_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nfs` <a name="put_nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs"></a>

```python
def put_nfs(
  value: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroupsNfs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_ip_networks` <a name="reset_ip_networks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetIpNetworks"></a>

```python
def reset_ip_networks() -> None
```

##### `reset_nfs` <a name="reset_nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList">DataIonoscloudNfsShareClientGroupsNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworksInput">ip_networks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfsInput">nfs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworks">ip_networks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfs"></a>

```python
nfs: DataIonoscloudNfsShareClientGroupsNfsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList">DataIonoscloudNfsShareClientGroupsNfsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_networks_input`<sup>Optional</sup> <a name="ip_networks_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworksInput"></a>

```python
ip_networks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfsInput"></a>

```python
nfs_input: typing.Union[IResolvable, typing.List[DataIonoscloudNfsShareClientGroupsNfs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_networks`<sup>Required</sup> <a name="ip_networks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworks"></a>

```python
ip_networks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudNfsShareClientGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>]

---



