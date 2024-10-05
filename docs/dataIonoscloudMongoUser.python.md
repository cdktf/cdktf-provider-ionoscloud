# `dataIonoscloudMongoUser` Submodule <a name="`dataIonoscloudMongoUser` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudMongoUser <a name="DataIonoscloudMongoUser" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user ionoscloud_mongo_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUser(
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
  username: str,
  database: str = None,
  id: str = None,
  roles: typing.Union[IResolvable, typing.List[DataIonoscloudMongoUserRoles]] = None,
  timeouts: DataIonoscloudMongoUserTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The id of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.username">username</a></code> | <code>str</code> | The username to search for. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.database">database</a></code> | <code>str</code> | The database. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Id of the backup unit. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]</code> | roles block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.clusterId"></a>

- *Type:* str

The id of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#cluster_id DataIonoscloudMongoUser#cluster_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.username"></a>

- *Type:* str

The username to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#username DataIonoscloudMongoUser#username}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.database"></a>

- *Type:* str

The database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#database DataIonoscloudMongoUser#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.id"></a>

- *Type:* str

Id of the backup unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#id DataIonoscloudMongoUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.roles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#roles DataIonoscloudMongoUser#roles}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#timeouts DataIonoscloudMongoUser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putRoles"></a>

```python
def put_roles(
  value: typing.Union[IResolvable, typing.List[DataIonoscloudMongoUserRoles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putRoles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#create DataIonoscloudMongoUser#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#default DataIonoscloudMongoUser#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#delete DataIonoscloudMongoUser#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#update DataIonoscloudMongoUser#update}.

---

##### `reset_database` <a name="reset_database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudMongoUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudMongoUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudMongoUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudMongoUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudMongoUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList">DataIonoscloudMongoUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference">DataIonoscloudMongoUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.rolesInput">roles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.roles"></a>

```python
roles: DataIonoscloudMongoUserRolesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList">DataIonoscloudMongoUserRolesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeouts"></a>

```python
timeouts: DataIonoscloudMongoUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference">DataIonoscloudMongoUserTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.rolesInput"></a>

```python
roles_input: typing.Union[IResolvable, typing.List[DataIonoscloudMongoUserRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataIonoscloudMongoUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudMongoUserConfig <a name="DataIonoscloudMongoUserConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  username: str,
  database: str = None,
  id: str = None,
  roles: typing.Union[IResolvable, typing.List[DataIonoscloudMongoUserRoles]] = None,
  timeouts: DataIonoscloudMongoUserTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The id of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.username">username</a></code> | <code>str</code> | The username to search for. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.database">database</a></code> | <code>str</code> | The database. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.id">id</a></code> | <code>str</code> | Id of the backup unit. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]</code> | roles block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The id of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#cluster_id DataIonoscloudMongoUser#cluster_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#username DataIonoscloudMongoUser#username}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#database DataIonoscloudMongoUser#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Id of the backup unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#id DataIonoscloudMongoUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.roles"></a>

```python
roles: typing.Union[IResolvable, typing.List[DataIonoscloudMongoUserRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#roles DataIonoscloudMongoUser#roles}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.timeouts"></a>

```python
timeouts: DataIonoscloudMongoUserTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#timeouts DataIonoscloudMongoUser#timeouts}

---

### DataIonoscloudMongoUserRoles <a name="DataIonoscloudMongoUserRoles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles(
  database: str = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#database DataIonoscloudMongoUser#database}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.role">role</a></code> | <code>str</code> | A list of mongodb user roles. Examples: read, readWrite, readAnyDatabase. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#database DataIonoscloudMongoUser#database}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.role"></a>

```python
role: str
```

- *Type:* str

A list of mongodb user roles. Examples: read, readWrite, readAnyDatabase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#role DataIonoscloudMongoUser#role}

---

### DataIonoscloudMongoUserTimeouts <a name="DataIonoscloudMongoUserTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#create DataIonoscloudMongoUser#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#default DataIonoscloudMongoUser#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#delete DataIonoscloudMongoUser#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#update DataIonoscloudMongoUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#create DataIonoscloudMongoUser#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#default DataIonoscloudMongoUser#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#delete DataIonoscloudMongoUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/mongo_user#update DataIonoscloudMongoUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudMongoUserRolesList <a name="DataIonoscloudMongoUserRolesList" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudMongoUserRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataIonoscloudMongoUserRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]]

---


### DataIonoscloudMongoUserRolesOutputReference <a name="DataIonoscloudMongoUserRolesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database` <a name="reset_database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudMongoUserRoles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles">DataIonoscloudMongoUserRoles</a>]

---


### DataIonoscloudMongoUserTimeoutsOutputReference <a name="DataIonoscloudMongoUserTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_mongo_user

dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudMongoUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>]

---



