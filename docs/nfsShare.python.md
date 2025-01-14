# `nfsShare` Submodule <a name="`nfsShare` Submodule" id="@cdktf/provider-ionoscloud.nfsShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NfsShare <a name="NfsShare" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share ionoscloud_nfs_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShare(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_groups: typing.Union[IResolvable, typing.List[NfsShareClientGroups]],
  cluster_id: str,
  name: str,
  gid: typing.Union[int, float] = None,
  location: str = None,
  quota: typing.Union[int, float] = None,
  timeouts: NfsShareTimeouts = None,
  uid: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.clientGroups">client_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]</code> | client_groups block. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Network File Storage Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.name">name</a></code> | <code>str</code> | The directory being exported. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.gid">gid</a></code> | <code>typing.Union[int, float]</code> | The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.quota">quota</a></code> | <code>typing.Union[int, float]</code> | The quota in MiB for the export. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.uid">uid</a></code> | <code>typing.Union[int, float]</code> | The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_groups`<sup>Required</sup> <a name="client_groups" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.clientGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]

client_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#client_groups NfsShare#client_groups}

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the Network File Storage Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#cluster_id NfsShare#cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.name"></a>

- *Type:* str

The directory being exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#name NfsShare#name}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.gid"></a>

- *Type:* typing.Union[int, float]

The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#gid NfsShare#gid}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.location"></a>

- *Type:* str

The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#location NfsShare#location}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.quota"></a>

- *Type:* typing.Union[int, float]

The quota in MiB for the export.

The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#quota NfsShare#quota}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#timeouts NfsShare#timeouts}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.Initializer.parameter.uid"></a>

- *Type:* typing.Union[int, float]

The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#uid NfsShare#uid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.putClientGroups">put_client_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetUid">reset_uid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_groups` <a name="put_client_groups" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.putClientGroups"></a>

```python
def put_client_groups(
  value: typing.Union[IResolvable, typing.List[NfsShareClientGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.putClientGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#create NfsShare#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#default NfsShare#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#delete NfsShare#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#update NfsShare#update}.

---

##### `reset_gid` <a name="reset_gid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.resetUid"></a>

```python
def reset_uid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NfsShare resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NfsShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NfsShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NfsShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NfsShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clientGroups">client_groups</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList">NfsShareClientGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.nfsPath">nfs_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference">NfsShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clientGroupsInput">client_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.quotaInput">quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.quota">quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_groups`<sup>Required</sup> <a name="client_groups" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clientGroups"></a>

```python
client_groups: NfsShareClientGroupsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList">NfsShareClientGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nfs_path`<sup>Required</sup> <a name="nfs_path" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.nfsPath"></a>

```python
nfs_path: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.timeouts"></a>

```python
timeouts: NfsShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference">NfsShareTimeoutsOutputReference</a>

---

##### `client_groups_input`<sup>Optional</sup> <a name="client_groups_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clientGroupsInput"></a>

```python
client_groups_input: typing.Union[IResolvable, typing.List[NfsShareClientGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.quotaInput"></a>

```python
quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NfsShareTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a>]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.quota"></a>

```python
quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.nfsShare.NfsShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NfsShareClientGroups <a name="NfsShareClientGroups" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareClientGroups(
  hosts: typing.List[str],
  ip_networks: typing.List[str],
  description: str = None,
  nfs: NfsShareClientGroupsNfs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | A singular host allowed to connect to the share. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.ipNetworks">ip_networks</a></code> | <code>typing.List[str]</code> | The allowed host or network to which the export is being shared. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.description">description</a></code> | <code>str</code> | Optional description for the clients groups. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs">NfsShareClientGroupsNfs</a></code> | nfs block. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

A singular host allowed to connect to the share.

The host can be specified as IP address and can be either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#hosts NfsShare#hosts}

---

##### `ip_networks`<sup>Required</sup> <a name="ip_networks" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.ipNetworks"></a>

```python
ip_networks: typing.List[str]
```

- *Type:* typing.List[str]

The allowed host or network to which the export is being shared.

The IP address can be either IPv4 or IPv6 and has to be given with CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#ip_networks NfsShare#ip_networks}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the clients groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#description NfsShare#description}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups.property.nfs"></a>

```python
nfs: NfsShareClientGroupsNfs
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs">NfsShareClientGroupsNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#nfs NfsShare#nfs}

---

### NfsShareClientGroupsNfs <a name="NfsShareClientGroupsNfs" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareClientGroupsNfs(
  squash: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs.property.squash">squash</a></code> | <code>str</code> | The squash mode for the export. |

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs.property.squash"></a>

```python
squash: str
```

- *Type:* str

The squash mode for the export.

The squash mode can be: none - No squash mode. no mapping, root-anonymous - Map root user to anonymous uid, all-anonymous - Map all users to anonymous uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#squash NfsShare#squash}

---

### NfsShareConfig <a name="NfsShareConfig" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_groups: typing.Union[IResolvable, typing.List[NfsShareClientGroups]],
  cluster_id: str,
  name: str,
  gid: typing.Union[int, float] = None,
  location: str = None,
  quota: typing.Union[int, float] = None,
  timeouts: NfsShareTimeouts = None,
  uid: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.clientGroups">client_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]</code> | client_groups block. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Network File Storage Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.name">name</a></code> | <code>str</code> | The directory being exported. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.location">location</a></code> | <code>str</code> | The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.quota">quota</a></code> | <code>typing.Union[int, float]</code> | The quota in MiB for the export. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_groups`<sup>Required</sup> <a name="client_groups" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.clientGroups"></a>

```python
client_groups: typing.Union[IResolvable, typing.List[NfsShareClientGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]

client_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#client_groups NfsShare#client_groups}

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the Network File Storage Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#cluster_id NfsShare#cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The directory being exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#name NfsShare#name}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#gid NfsShare#gid}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#location NfsShare#location}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.quota"></a>

```python
quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The quota in MiB for the export.

The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#quota NfsShare#quota}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.timeouts"></a>

```python
timeouts: NfsShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#timeouts NfsShare#timeouts}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareConfig.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#uid NfsShare#uid}

---

### NfsShareTimeouts <a name="NfsShareTimeouts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#create NfsShare#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#default NfsShare#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#delete NfsShare#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#update NfsShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#create NfsShare#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#default NfsShare#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#delete NfsShare#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#update NfsShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NfsShareClientGroupsList <a name="NfsShareClientGroupsList" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareClientGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NfsShareClientGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NfsShareClientGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]]

---


### NfsShareClientGroupsNfsOutputReference <a name="NfsShareClientGroupsNfsOutputReference" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareClientGroupsNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.resetSquash">reset_squash</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_squash` <a name="reset_squash" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.resetSquash"></a>

```python
def reset_squash() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.squashInput">squash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.squash">squash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs">NfsShareClientGroupsNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `squash_input`<sup>Optional</sup> <a name="squash_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.squashInput"></a>

```python
squash_input: str
```

- *Type:* str

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.squash"></a>

```python
squash: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference.property.internalValue"></a>

```python
internal_value: NfsShareClientGroupsNfs
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs">NfsShareClientGroupsNfs</a>

---


### NfsShareClientGroupsOutputReference <a name="NfsShareClientGroupsOutputReference" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareClientGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nfs` <a name="put_nfs" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.putNfs"></a>

```python
def put_nfs(
  squash: str = None
) -> None
```

###### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.putNfs.parameter.squash"></a>

- *Type:* str

The squash mode for the export.

The squash mode can be: none - No squash mode. no mapping, root-anonymous - Map root user to anonymous uid, all-anonymous - Map all users to anonymous uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/nfs_share#squash NfsShare#squash}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_nfs` <a name="reset_nfs" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference">NfsShareClientGroupsNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.ipNetworksInput">ip_networks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.nfsInput">nfs_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs">NfsShareClientGroupsNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.ipNetworks">ip_networks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.nfs"></a>

```python
nfs: NfsShareClientGroupsNfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfsOutputReference">NfsShareClientGroupsNfsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_networks_input`<sup>Optional</sup> <a name="ip_networks_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.ipNetworksInput"></a>

```python
ip_networks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.nfsInput"></a>

```python
nfs_input: NfsShareClientGroupsNfs
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsNfs">NfsShareClientGroupsNfs</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_networks`<sup>Required</sup> <a name="ip_networks" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.ipNetworks"></a>

```python
ip_networks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NfsShareClientGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareClientGroups">NfsShareClientGroups</a>]

---


### NfsShareTimeoutsOutputReference <a name="NfsShareTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nfs_share

nfsShare.NfsShareTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NfsShareTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nfsShare.NfsShareTimeouts">NfsShareTimeouts</a>]

---



