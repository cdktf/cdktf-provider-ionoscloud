# `dataIonoscloudApplicationLoadbalancerForwardingrule` Submodule <a name="`dataIonoscloudApplicationLoadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudApplicationLoadbalancerForwardingrule <a name="DataIonoscloudApplicationLoadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_loadbalancer_id: str,
  datacenter_id: str,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None,
  timeouts: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.applicationLoadbalancerId">application_loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_loadbalancer_id`<sup>Required</sup> <a name="application_loadbalancer_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.applicationLoadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.name"></a>

- *Type:* str

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#name DataIonoscloudApplicationLoadbalancerForwardingrule#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.partialMatch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#partial_match DataIonoscloudApplicationLoadbalancerForwardingrule#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#timeouts DataIonoscloudApplicationLoadbalancerForwardingrule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetPartialMatch">reset_partial_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_partial_match` <a name="reset_partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetPartialMatch"></a>

```python
def reset_partial_match() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudApplicationLoadbalancerForwardingrule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudApplicationLoadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudApplicationLoadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.httpRules">http_rules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerIp">listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.serverCertificates">server_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput">application_loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatchInput">partial_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId">application_loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `client_timeout`<sup>Required</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_rules`<sup>Required</sup> <a name="http_rules" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.httpRules"></a>

```python
http_rules: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList</a>

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerIp"></a>

```python
listener_ip: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `server_certificates`<sup>Required</sup> <a name="server_certificates" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.serverCertificates"></a>

```python
server_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeouts"></a>

```python
timeouts: DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `application_loadbalancer_id_input`<sup>Optional</sup> <a name="application_loadbalancer_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput"></a>

```python
application_loadbalancer_id_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partial_match_input`<sup>Optional</sup> <a name="partial_match_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatchInput"></a>

```python
partial_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>]

---

##### `application_loadbalancer_id`<sup>Required</sup> <a name="application_loadbalancer_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId"></a>

```python
application_loadbalancer_id: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partial_match`<sup>Required</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudApplicationLoadbalancerForwardingruleConfig <a name="DataIonoscloudApplicationLoadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_loadbalancer_id: str,
  datacenter_id: str,
  id: str = None,
  name: str = None,
  partial_match: typing.Union[bool, IResolvable] = None,
  timeouts: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId">application_loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.name">name</a></code> | <code>str</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.partialMatch">partial_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_loadbalancer_id`<sup>Required</sup> <a name="application_loadbalancer_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId"></a>

```python
application_loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#name DataIonoscloudApplicationLoadbalancerForwardingrule#name}

---

##### `partial_match`<sup>Optional</sup> <a name="partial_match" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.partialMatch"></a>

```python
partial_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#partial_match DataIonoscloudApplicationLoadbalancerForwardingrule#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.timeouts"></a>

```python
timeouts: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#timeouts DataIonoscloudApplicationLoadbalancerForwardingrule#timeouts}

---

### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules()
```


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions()
```


### DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts <a name="DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate">negate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate"></a>

```python
negate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions</a>

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery">drop_query</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage">response_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup">target_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions"></a>

```python
conditions: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a>

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `drop_query`<sup>Required</sup> <a name="drop_query" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery"></a>

```python
drop_query: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `response_message`<sup>Required</sup> <a name="response_message" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage"></a>

```python
response_message: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group`<sup>Required</sup> <a name="target_group" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup"></a>

```python
target_group: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules</a>

---


### DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_application_loadbalancer_forwardingrule

dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>]

---



