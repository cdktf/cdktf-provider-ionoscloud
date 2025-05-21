# `dataIonoscloudK8SNodePoolNodes` Submodule <a name="`dataIonoscloudK8SNodePoolNodes` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudK8SNodePoolNodes <a name="DataIonoscloudK8SNodePoolNodes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes ionoscloud_k8s_node_pool_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  k8_s_cluster_id: str,
  node_pool_id: str,
  id: str = None,
  timeouts: DataIonoscloudK8SNodePoolNodesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.k8SClusterId">k8_s_cluster_id</a></code> | <code>str</code> | The UUID of an existing kubernetes cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.nodePoolId">node_pool_id</a></code> | <code>str</code> | The UUID of an existing nodepool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#id DataIonoscloudK8SNodePoolNodes#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `k8_s_cluster_id`<sup>Required</sup> <a name="k8_s_cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.k8SClusterId"></a>

- *Type:* str

The UUID of an existing kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#k8s_cluster_id DataIonoscloudK8SNodePoolNodes#k8s_cluster_id}

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.nodePoolId"></a>

- *Type:* str

The UUID of an existing nodepool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#node_pool_id DataIonoscloudK8SNodePoolNodes#node_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#id DataIonoscloudK8SNodePoolNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#timeouts DataIonoscloudK8SNodePoolNodes#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#create DataIonoscloudK8SNodePoolNodes#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#default DataIonoscloudK8SNodePoolNodes#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#delete DataIonoscloudK8SNodePoolNodes#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#update DataIonoscloudK8SNodePoolNodes#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudK8SNodePoolNodes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudK8SNodePoolNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudK8SNodePoolNodes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudK8SNodePoolNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudK8SNodePoolNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList">DataIonoscloudK8SNodePoolNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference">DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterIdInput">k8_s_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolIdInput">node_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterId">k8_s_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodes"></a>

```python
nodes: DataIonoscloudK8SNodePoolNodesNodesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList">DataIonoscloudK8SNodePoolNodesNodesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeouts"></a>

```python
timeouts: DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference">DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `k8_s_cluster_id_input`<sup>Optional</sup> <a name="k8_s_cluster_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterIdInput"></a>

```python
k8_s_cluster_id_input: str
```

- *Type:* str

---

##### `node_pool_id_input`<sup>Optional</sup> <a name="node_pool_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolIdInput"></a>

```python
node_pool_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataIonoscloudK8SNodePoolNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `k8_s_cluster_id`<sup>Required</sup> <a name="k8_s_cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterId"></a>

```python
k8_s_cluster_id: str
```

- *Type:* str

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudK8SNodePoolNodesConfig <a name="DataIonoscloudK8SNodePoolNodesConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  k8_s_cluster_id: str,
  node_pool_id: str,
  id: str = None,
  timeouts: DataIonoscloudK8SNodePoolNodesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.k8SClusterId">k8_s_cluster_id</a></code> | <code>str</code> | The UUID of an existing kubernetes cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | The UUID of an existing nodepool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#id DataIonoscloudK8SNodePoolNodes#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `k8_s_cluster_id`<sup>Required</sup> <a name="k8_s_cluster_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.k8SClusterId"></a>

```python
k8_s_cluster_id: str
```

- *Type:* str

The UUID of an existing kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#k8s_cluster_id DataIonoscloudK8SNodePoolNodes#k8s_cluster_id}

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

The UUID of an existing nodepool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#node_pool_id DataIonoscloudK8SNodePoolNodes#node_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#id DataIonoscloudK8SNodePoolNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.timeouts"></a>

```python
timeouts: DataIonoscloudK8SNodePoolNodesTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#timeouts DataIonoscloudK8SNodePoolNodes#timeouts}

---

### DataIonoscloudK8SNodePoolNodesNodes <a name="DataIonoscloudK8SNodePoolNodesNodes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes()
```


### DataIonoscloudK8SNodePoolNodesTimeouts <a name="DataIonoscloudK8SNodePoolNodesTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#create DataIonoscloudK8SNodePoolNodes#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#default DataIonoscloudK8SNodePoolNodes#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#delete DataIonoscloudK8SNodePoolNodes#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#update DataIonoscloudK8SNodePoolNodes#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#create DataIonoscloudK8SNodePoolNodes#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#default DataIonoscloudK8SNodePoolNodes#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#delete DataIonoscloudK8SNodePoolNodes#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.7/docs/data-sources/k8s_node_pool_nodes#update DataIonoscloudK8SNodePoolNodes#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudK8SNodePoolNodesNodesList <a name="DataIonoscloudK8SNodePoolNodesNodesList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudK8SNodePoolNodesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudK8SNodePoolNodesNodesOutputReference <a name="DataIonoscloudK8SNodePoolNodesNodesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.k8SVersion">k8_s_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes">DataIonoscloudK8SNodePoolNodesNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `k8_s_version`<sup>Required</sup> <a name="k8_s_version" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.k8SVersion"></a>

```python
k8_s_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudK8SNodePoolNodesNodes
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes">DataIonoscloudK8SNodePoolNodesNodes</a>

---


### DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference <a name="DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_k8_s_node_pool_nodes

dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudK8SNodePoolNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>]

---



