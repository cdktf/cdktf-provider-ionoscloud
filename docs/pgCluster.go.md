# `ionoscloud_pg_cluster`

Refer to the Terraform Registory for docs: [`ionoscloud_pg_cluster`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster).

# `pgCluster` Submodule <a name="`pgCluster` Submodule" id="@cdktf/provider-ionoscloud.pgCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PgCluster <a name="PgCluster" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster ionoscloud_pg_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.NewPgCluster(scope Construct, id *string, config PgClusterConfig) PgCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig">PgClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig">PgClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putFromBackup">PutFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetBackupLocation">ResetBackupLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetConnections">ResetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetFromBackup">ResetFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections"></a>

```go
func PutConnections(value PgClusterConnections)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putCredentials"></a>

```go
func PutCredentials(value PgClusterCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

---

##### `PutFromBackup` <a name="PutFromBackup" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putFromBackup"></a>

```go
func PutFromBackup(value PgClusterFromBackup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putFromBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value PgClusterMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts"></a>

```go
func PutTimeouts(value PgClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>

---

##### `ResetBackupLocation` <a name="ResetBackupLocation" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetBackupLocation"></a>

```go
func ResetBackupLocation()
```

##### `ResetConnections` <a name="ResetConnections" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetConnections"></a>

```go
func ResetConnections()
```

##### `ResetFromBackup` <a name="ResetFromBackup" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetFromBackup"></a>

```go
func ResetFromBackup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.PgCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.PgCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.PgCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference">PgClusterConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference">PgClusterCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackup">FromBackup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference">PgClusterFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference">PgClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference">PgClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocationInput">BackupLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionsInput">ConnectionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.coresInput">CoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackupInput">FromBackupInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instancesInput">InstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersionInput">PostgresVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ramInput">RamInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSizeInput">StorageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationModeInput">SynchronizationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocation">BackupLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cores">Cores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instances">Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersion">PostgresVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ram">Ram</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSize">StorageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationMode">SynchronizationMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connections"></a>

```go
func Connections() PgClusterConnectionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference">PgClusterConnectionsOutputReference</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentials"></a>

```go
func Credentials() PgClusterCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference">PgClusterCredentialsOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `FromBackup`<sup>Required</sup> <a name="FromBackup" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackup"></a>

```go
func FromBackup() PgClusterFromBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference">PgClusterFromBackupOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() PgClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference">PgClusterMaintenanceWindowOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeouts"></a>

```go
func Timeouts() PgClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference">PgClusterTimeoutsOutputReference</a>

---

##### `BackupLocationInput`<sup>Optional</sup> <a name="BackupLocationInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocationInput"></a>

```go
func BackupLocationInput() *string
```

- *Type:* *string

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionsInput"></a>

```go
func ConnectionsInput() PgClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.coresInput"></a>

```go
func CoresInput() *f64
```

- *Type:* *f64

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentialsInput"></a>

```go
func CredentialsInput() PgClusterCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FromBackupInput`<sup>Optional</sup> <a name="FromBackupInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackupInput"></a>

```go
func FromBackupInput() PgClusterFromBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instancesInput"></a>

```go
func InstancesInput() *f64
```

- *Type:* *f64

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() PgClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

---

##### `PostgresVersionInput`<sup>Optional</sup> <a name="PostgresVersionInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersionInput"></a>

```go
func PostgresVersionInput() *string
```

- *Type:* *string

---

##### `RamInput`<sup>Optional</sup> <a name="RamInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ramInput"></a>

```go
func RamInput() *f64
```

- *Type:* *f64

---

##### `StorageSizeInput`<sup>Optional</sup> <a name="StorageSizeInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSizeInput"></a>

```go
func StorageSizeInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `SynchronizationModeInput`<sup>Optional</sup> <a name="SynchronizationModeInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationModeInput"></a>

```go
func SynchronizationModeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupLocation`<sup>Required</sup> <a name="BackupLocation" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocation"></a>

```go
func BackupLocation() *string
```

- *Type:* *string

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cores"></a>

```go
func Cores() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instances"></a>

```go
func Instances() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersion"></a>

```go
func PostgresVersion() *string
```

- *Type:* *string

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ram"></a>

```go
func Ram() *f64
```

- *Type:* *f64

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSize"></a>

```go
func StorageSize() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `SynchronizationMode`<sup>Required</sup> <a name="SynchronizationMode" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationMode"></a>

```go
func SynchronizationMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PgClusterConfig <a name="PgClusterConfig" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

&pgcluster.PgClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cores: *f64,
	Credentials: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7.pgCluster.PgClusterCredentials,
	DisplayName: *string,
	Instances: *f64,
	Location: *string,
	PostgresVersion: *string,
	Ram: *f64,
	StorageSize: *f64,
	StorageType: *string,
	SynchronizationMode: *string,
	BackupLocation: *string,
	Connections: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7.pgCluster.PgClusterConnections,
	FromBackup: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7.pgCluster.PgClusterFromBackup,
	Id: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7.pgCluster.PgClusterMaintenanceWindow,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7.pgCluster.PgClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.cores">Cores</a></code> | <code>*f64</code> | The number of CPU cores per replica. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The friendly name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.instances">Instances</a></code> | <code>*f64</code> | The total number of instances in the cluster (one master and n-1 standbys). |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.location">Location</a></code> | <code>*string</code> | The physical location where the cluster will be created. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.postgresVersion">PostgresVersion</a></code> | <code>*string</code> | The PostgreSQL version of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.ram">Ram</a></code> | <code>*f64</code> | The amount of memory per instance in megabytes. Has to be a multiple of 1024. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageSize">StorageSize</a></code> | <code>*f64</code> | The amount of storage per instance in megabytes. Has to be a multiple of 2048. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageType">StorageType</a></code> | <code>*string</code> | The storage type used in your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.synchronizationMode">SynchronizationMode</a></code> | <code>*string</code> | Represents different modes of replication. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.backupLocation">BackupLocation</a></code> | <code>*string</code> | The S3 location where the backups will be stored. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.fromBackup">FromBackup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a></code> | from_backup block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#id PgCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.cores"></a>

```go
Cores *f64
```

- *Type:* *f64

The number of CPU cores per replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#cores PgCluster#cores}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.credentials"></a>

```go
Credentials PgClusterCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#credentials PgCluster#credentials}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The friendly name of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#display_name PgCluster#display_name}

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.instances"></a>

```go
Instances *f64
```

- *Type:* *f64

The total number of instances in the cluster (one master and n-1 standbys).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#instances PgCluster#instances}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The physical location where the cluster will be created.

This will be where all of your instances live. Property cannot be modified after datacenter creation (disallowed in update requests)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#location PgCluster#location}

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.postgresVersion"></a>

```go
PostgresVersion *string
```

- *Type:* *string

The PostgreSQL version of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#postgres_version PgCluster#postgres_version}

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.ram"></a>

```go
Ram *f64
```

- *Type:* *f64

The amount of memory per instance in megabytes. Has to be a multiple of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#ram PgCluster#ram}

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageSize"></a>

```go
StorageSize *f64
```

- *Type:* *f64

The amount of storage per instance in megabytes. Has to be a multiple of 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#storage_size PgCluster#storage_size}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

The storage type used in your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#storage_type PgCluster#storage_type}

---

##### `SynchronizationMode`<sup>Required</sup> <a name="SynchronizationMode" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.synchronizationMode"></a>

```go
SynchronizationMode *string
```

- *Type:* *string

Represents different modes of replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#synchronization_mode PgCluster#synchronization_mode}

---

##### `BackupLocation`<sup>Optional</sup> <a name="BackupLocation" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.backupLocation"></a>

```go
BackupLocation *string
```

- *Type:* *string

The S3 location where the backups will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#backup_location PgCluster#backup_location}

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connections"></a>

```go
Connections PgClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#connections PgCluster#connections}

---

##### `FromBackup`<sup>Optional</sup> <a name="FromBackup" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.fromBackup"></a>

```go
FromBackup PgClusterFromBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#from_backup PgCluster#from_backup}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#id PgCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow PgClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#maintenance_window PgCluster#maintenance_window}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.timeouts"></a>

```go
Timeouts PgClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#timeouts PgCluster#timeouts}

---

### PgClusterConnections <a name="PgClusterConnections" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

&pgcluster.PgClusterConnections {
	Cidr: *string,
	DatacenterId: *string,
	LanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.cidr">Cidr</a></code> | <code>*string</code> | The IP and subnet for the database. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The datacenter to connect your cluster to. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.lanId">LanId</a></code> | <code>*string</code> | The LAN to connect your cluster to. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

The IP and subnet for the database.

Note the following unavailable IP ranges:
10.233.64.0/18
10.233.0.0/18
10.233.114.0/24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#cidr PgCluster#cidr}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The datacenter to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#datacenter_id PgCluster#datacenter_id}

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.lanId"></a>

```go
LanId *string
```

- *Type:* *string

The LAN to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#lan_id PgCluster#lan_id}

---

### PgClusterCredentials <a name="PgClusterCredentials" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

&pgcluster.PgClusterCredentials {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#password PgCluster#password}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.username">Username</a></code> | <code>*string</code> | the username for the initial postgres user. some system usernames are restricted (e.g. "postgres", "admin", "standby"). |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#password PgCluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

the username for the initial postgres user. some system usernames are restricted (e.g. "postgres", "admin", "standby").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#username PgCluster#username}

---

### PgClusterFromBackup <a name="PgClusterFromBackup" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

&pgcluster.PgClusterFromBackup {
	BackupId: *string,
	RecoveryTargetTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.backupId">BackupId</a></code> | <code>*string</code> | The unique ID of the backup you want to restore. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.recoveryTargetTime">RecoveryTargetTime</a></code> | <code>*string</code> | If this value is supplied as ISO 8601 timestamp, the backup will be replayed up until the given timestamp. |

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.backupId"></a>

```go
BackupId *string
```

- *Type:* *string

The unique ID of the backup you want to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#backup_id PgCluster#backup_id}

---

##### `RecoveryTargetTime`<sup>Optional</sup> <a name="RecoveryTargetTime" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.recoveryTargetTime"></a>

```go
RecoveryTargetTime *string
```

- *Type:* *string

If this value is supplied as ISO 8601 timestamp, the backup will be replayed up until the given timestamp.

If empty, the backup will be applied completely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#recovery_target_time PgCluster#recovery_target_time}

---

### PgClusterMaintenanceWindow <a name="PgClusterMaintenanceWindow" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

&pgcluster.PgClusterMaintenanceWindow {
	DayOfTheWeek: *string,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#day_of_the_week PgCluster#day_of_the_week}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.time">Time</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#time PgCluster#time}. |

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.dayOfTheWeek"></a>

```go
DayOfTheWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#day_of_the_week PgCluster#day_of_the_week}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.time"></a>

```go
Time *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#time PgCluster#time}.

---

### PgClusterTimeouts <a name="PgClusterTimeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

&pgcluster.PgClusterTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#create PgCluster#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#default PgCluster#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#delete PgCluster#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#update PgCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#create PgCluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#default PgCluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#delete PgCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/pg_cluster#update PgCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PgClusterConnectionsOutputReference <a name="PgClusterConnectionsOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.NewPgClusterConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PgClusterConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanIdInput">LanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `LanIdInput`<sup>Optional</sup> <a name="LanIdInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanIdInput"></a>

```go
func LanIdInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() PgClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

---


### PgClusterCredentialsOutputReference <a name="PgClusterCredentialsOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.NewPgClusterCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PgClusterCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() PgClusterCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

---


### PgClusterFromBackupOutputReference <a name="PgClusterFromBackupOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.NewPgClusterFromBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PgClusterFromBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resetRecoveryTargetTime">ResetRecoveryTargetTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecoveryTargetTime` <a name="ResetRecoveryTargetTime" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resetRecoveryTargetTime"></a>

```go
func ResetRecoveryTargetTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTimeInput">RecoveryTargetTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTime">RecoveryTargetTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupIdInput"></a>

```go
func BackupIdInput() *string
```

- *Type:* *string

---

##### `RecoveryTargetTimeInput`<sup>Optional</sup> <a name="RecoveryTargetTimeInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTimeInput"></a>

```go
func RecoveryTargetTimeInput() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `RecoveryTargetTime`<sup>Required</sup> <a name="RecoveryTargetTime" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTime"></a>

```go
func RecoveryTargetTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() PgClusterFromBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

---


### PgClusterMaintenanceWindowOutputReference <a name="PgClusterMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.NewPgClusterMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PgClusterMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput">DayOfTheWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfTheWeekInput`<sup>Optional</sup> <a name="DayOfTheWeekInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```go
func DayOfTheWeekInput() *string
```

- *Type:* *string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```go
func DayOfTheWeek() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() PgClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

---


### PgClusterTimeoutsOutputReference <a name="PgClusterTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v7/pgcluster"

pgcluster.NewPgClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PgClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



